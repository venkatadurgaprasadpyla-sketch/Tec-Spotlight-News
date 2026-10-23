// One place for site-wide settings. Change a value here and it updates everywhere.
export const SITE = {
  name: 'TechSpotlight News',
  tagline: 'What matters in tech, explained for you.',
  description:
    'Short, clear tech news and honest guides to apps and AI tools, for curious readers everywhere.',
  url: 'https://tec-spotlight-news.techspotlightid-official.workers.dev',
  author: 'Pyla',
  contactEmail: 'techspotlightid.official@gmail.com',
  locale: 'en_US',
  // Ads stay off until the AdSense application is approved.
  adsEnabled: false,
  adsenseClient: '',
  // Newsletter sign-up boxes stay off on the live site until Pyla approves
  // the newsletter and the email service is set up. Previews always show them.
  newsletterEnabled: false,
};

export const NEWS_CATEGORIES = [
  { slug: 'ai', name: 'AI' },
  { slug: 'apps-software', name: 'Apps & Software' },
  { slug: 'phones-gadgets', name: 'Phones & Gadgets' },
  { slug: 'launches', name: 'Launches' },
  { slug: 'deals', name: 'Deals' },
  { slug: 'business', name: 'Big Tech & Business' },
  { slug: 'science', name: 'Science & Breakthroughs' },
] as const;

export const GUIDE_CATEGORIES = [
  { slug: 'best-tools', name: 'Best Tools' },
  { slug: 'comparisons', name: 'Comparisons' },
  { slug: 'reviews', name: 'Reviews' },
  { slug: 'alternatives', name: 'Alternatives' },
  { slug: 'how-to', name: 'How-to' },
] as const;

export const DISCLOSURE_TEXT =
  'This post contains affiliate links. I may earn a commission at no extra cost to you.';
