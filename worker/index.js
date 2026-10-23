// TechSpotlight newsletter worker. Sign-up needs EMAIL_API_KEY; sending needs
// NEWSLETTER_ENABLED="true". Both stay off until Pyla approves.
//
// It does two jobs next to the static site:
//   1. POST /api/subscribe: adds a reader to the email service, which sends a
//      "confirm your email" message first (double opt-in).
//   2. Every 30 minutes (cron): reads the LIVE news feed, queues stories that
//      newly appeared, and emails them two at a time. At 21:00 UTC a single
//      leftover story is sent on its own, so every story goes out the day it
//      is published. Drafts never reach the live feed, so they are never sent.
//
// Settings live in wrangler.jsonc (vars, KV, cron) and Cloudflare secrets.
//
// Settings (Cloudflare variables and secrets):
//   EMAIL_PROVIDER   "kit" (default) or "brevo"
//   EMAIL_API_KEY    secret key from the email service
//   KIT_FORM_ID      Kit only: the sign-up form (double opt-in is set there)
//   BREVO_LIST_ID, BREVO_DOI_TEMPLATE_ID, SENDER_EMAIL   Brevo only
//   SITE_URL         live site address, e.g. https://techspotlight.news
//   NEWSLETTER_LIVE  "true" sends to all subscribers; anything else sends
//                    only to TEST_EMAIL (Pyla's address) for checking
//   TEST_EMAIL       where test sends go
//   NEWSLETTER       KV namespace that remembers which stories were sent
//   NEWSLETTER_ENABLED  "true" turns the 30-minute sending job on

const MAX_EMAILS_PER_DAY = 6;
const LEFTOVER_HOUR_UTC = 21;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/api/subscribe') {
      if (request.method !== 'POST') return new Response('Method not allowed', { status: 405 });
      return subscribe(request, env);
    }
    // Everything else is the static site.
    return env.ASSETS.fetch(request);
  },

  async scheduled(_event, env, ctx) {
    // Off until Pyla approves: set NEWSLETTER_ENABLED to "true" in Cloudflare.
    if (env.NEWSLETTER_ENABLED !== 'true' || !env.EMAIL_API_KEY) return;
    ctx.waitUntil(sendNewStories(env));
  },
};

// ---------- 1. Sign-up ----------

async function subscribe(request, env) {
  const form = await request.formData();
  const email = String(form.get('email') || '').trim().toLowerCase();
  // Bots fill the hidden "website" field; people don't see it.
  if (form.get('website')) return json({ ok: true });
  if (!env.EMAIL_API_KEY) return json({ ok: false, error: 'Sign-up opens soon.' }, 503);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || email.length > 254) {
    return json({ ok: false, error: 'Please enter a valid email address.' }, 400);
  }
  try {
    await provider(env).subscribe(email);
    return json({ ok: true });
  } catch (err) {
    console.log('subscribe failed', String(err));
    return json({ ok: false, error: 'Sign-up failed. Please try again later.' }, 502);
  }
}

// ---------- 2. Sending ----------

async function sendNewStories(env) {
  const today = new Date().toISOString().slice(0, 10);
  const state = (await env.NEWSLETTER.get('state', 'json')) || { seen: [], queue: [], sent: {} };
  const stories = await readFeed(`${env.SITE_URL}/news/rss.xml`);

  // First run: remember what is already on the site so old stories aren't sent.
  if (state.seen.length === 0) {
    state.seen = stories.map((s) => s.link);
    await env.NEWSLETTER.put('state', JSON.stringify(state));
    return;
  }

  for (const s of stories) {
    if (!state.seen.includes(s.link)) {
      state.seen.push(s.link);
      state.queue.push({ ...s, queuedOn: today });
    }
  }
  state.seen = state.seen.slice(-500);

  // A story queued on an earlier day that somehow wasn't sent goes out now.
  const sentToday = state.sent[today] || 0;
  const hour = new Date().getUTCHours();
  const batches = [];
  while (state.queue.length >= 2) batches.push(state.queue.splice(0, 2));
  if (state.queue.length === 1 && (hour >= LEFTOVER_HOUR_UTC || state.queue[0].queuedOn !== today)) {
    batches.push(state.queue.splice(0, 1));
  }

  let count = sentToday;
  for (const batch of batches) {
    if (count >= MAX_EMAILS_PER_DAY) {
      state.queue.unshift(...batch); // wait for tomorrow's allowance
      continue;
    }
    await provider(env).send(subjectFor(batch), emailHtml(batch, env), env);
    count += 1;
  }
  state.sent = { [today]: count };
  await env.NEWSLETTER.put('state', JSON.stringify(state));
}

async function readFeed(url) {
  const res = await fetch(url, { headers: { 'User-Agent': 'TechSpotlight-Newsletter' } });
  if (!res.ok) throw new Error(`feed ${res.status}`);
  const xml = await res.text();
  const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map((m) => m[1]);
  const pick = (block, tag) => {
    const m = block.match(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`));
    return m ? decode(m[1].replace(/^<!\[CDATA\[|\]\]>$/g, '')) : '';
  };
  return items
    .map((b) => ({
      title: pick(b, 'title'),
      link: pick(b, 'link'),
      summary: pick(b, 'description'),
      image: (b.match(/<enclosure url="([^"]+)"/) || [])[1] || '',
    }))
    .filter((s) => s.link)
    .reverse(); // oldest first, so stories go out in the order they appeared
}

function decode(s) {
  return s
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, '&');
}

function esc(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function subjectFor(batch) {
  return batch.length === 2 ? `${batch[0].title} | plus 1 more story` : batch[0].title;
}

function emailHtml(batch, env) {
  const cards = batch
    .map(
      (s) => `
    <tr><td style="padding:0 0 28px">
      ${s.image ? `<a href="${esc(s.link)}"><img src="${esc(s.image)}" alt="" width="560" style="width:100%;max-width:560px;border-radius:8px;display:block"></a>` : ''}
      <h2 style="font:700 20px/1.3 Arial,sans-serif;color:#221c5a;margin:14px 0 8px">${esc(s.title)}</h2>
      <p style="font:16px/1.5 Arial,sans-serif;color:#1d1a3a;margin:0 0 12px">${esc(s.summary)}</p>
      <a href="${esc(s.link)}" style="display:inline-block;background:#ffae1a;color:#221c5a;font:700 15px Arial,sans-serif;padding:10px 18px;border-radius:6px;text-decoration:none">Read the full story</a>
    </td></tr>`
    )
    .join('');
  return `<!doctype html><html><body style="margin:0;background:#f6f5fb">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td align="center" style="padding:24px 12px">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#fff;border-radius:12px;padding:24px">
    <tr><td style="font:700 18px monospace;color:#221c5a;padding:0 0 20px">&gt; tech_spotlight</td></tr>
    ${cards}
    <tr><td style="font:13px/1.5 Arial,sans-serif;color:#5b5694;border-top:1px solid #e4e2f0;padding-top:16px">
      You get this because you subscribed at ${esc(env.SITE_URL.replace('https://', ''))}.
      The unsubscribe link and our postal address are added below by our email service.
    </td></tr>
  </table></td></tr></table></body></html>`;
}

// ---------- Email services ----------
// API calls follow each service's public docs; re-check them against the
// docs when the account is set up (Phase B), before switching anything on.

function provider(env) {
  return (env.EMAIL_PROVIDER || 'kit') === 'brevo' ? brevo(env) : kit(env);
}

function kit(env) {
  const call = async (path, body) => {
    const res = await fetch(`https://api.kit.com/v4${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Kit-Api-Key': env.EMAIL_API_KEY },
      body: JSON.stringify(body),
    });
    if (!res.ok) throw new Error(`Kit ${path} ${res.status}: ${await res.text()}`);
    return res.json();
  };
  return {
    async subscribe(email) {
      // The form's own settings send the "confirm your email" message.
      await call('/subscribers', { email_address: email });
      await call(`/forms/${env.KIT_FORM_ID}/subscribers`, { email_address: email });
    },
    async send(subject, html) {
      const live = env.NEWSLETTER_LIVE === 'true';
      if (!live) {
        console.log('test mode: Kit has no single-address send; logging instead', subject);
        return;
      }
      await call('/broadcasts', {
        subject,
        content: html,
        public: false,
        send_at: new Date().toISOString(),
      });
    },
  };
}

function brevo(env) {
  const call = async (path, body) => {
    const res = await fetch(`https://api.brevo.com/v3${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'api-key': env.EMAIL_API_KEY },
      body: JSON.stringify(body),
    });
    if (!res.ok) throw new Error(`Brevo ${path} ${res.status}: ${await res.text()}`);
    return res.status === 204 ? {} : res.json();
  };
  return {
    async subscribe(email) {
      await call('/contacts/doubleOptinConfirmation', {
        email,
        includeListIds: [Number(env.BREVO_LIST_ID)],
        templateId: Number(env.BREVO_DOI_TEMPLATE_ID),
        redirectionUrl: `${env.SITE_URL}/newsletter/?confirmed=1`,
      });
    },
    async send(subject, html) {
      const sender = { name: 'TechSpotlight News', email: env.SENDER_EMAIL };
      if (env.NEWSLETTER_LIVE !== 'true') {
        await call('/smtp/email', { sender, to: [{ email: env.TEST_EMAIL }], subject: `[TEST] ${subject}`, htmlContent: html });
        return;
      }
      const { id } = await call('/emailCampaigns', {
        name: `${new Date().toISOString().slice(0, 16)} ${subject}`.slice(0, 120),
        subject,
        sender,
        htmlContent: html,
        recipients: { listIds: [Number(env.BREVO_LIST_ID)] },
      });
      await call(`/emailCampaigns/${id}/sendNow`, {});
    },
  };
}

function json(body, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });
}
