// One place for site-wide settings. Change a value here and it updates everywhere.
export const SITE = {
  name: 'TechSpotlight News',
  tagline: 'What matters in tech, explained for you.',
  description:
    'Short, clear tech news and honest guides to apps and AI tools, written for readers in India and the UAE.',
  url: 'https://techspotlight.news',
  author: 'Pyla',
  // TODO: owner to confirm the contact email before launch.
  contactEmail: '[CONTACT EMAIL]',
  locale: 'en_IN',
  // Ads stay off until the AdSense application is approved.
  adsEnabled: false,
  adsenseClient: '',
};

export const NEWS_CATEGORIES = [
  { slug: 'ai', name: 'AI' },
  { slug: 'apps-software', name: 'Apps & Software' },
  { slug: 'phones-gadgets', name: 'Phones & Gadgets' },
  { slug: 'launches', name: 'Launches' },
  { slug: 'deals', name: 'Deals' },
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
