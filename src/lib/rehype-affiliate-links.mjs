// Lets posts write affiliate links as [Try Gamma](affiliate:gamma).
// At build time the link is swapped for the real one from data/affiliates.json
// and tagged rel="sponsored nofollow", so links only ever change in one file.
import { readFileSync } from 'node:fs';

const file = new URL('../../data/affiliates.json', import.meta.url);

function visit(node, fn) {
  fn(node);
  if (node.children) for (const child of node.children) visit(child, fn);
}

export default function rehypeAffiliateLinks() {
  return (tree) => {
    const tools = JSON.parse(readFileSync(file, 'utf8')).tools;
    visit(tree, (node) => {
      if (node.type !== 'element' || node.tagName !== 'a') return;
      const href = String(node.properties?.href ?? '');
      if (!href.startsWith('affiliate:')) return;
      const key = href.slice('affiliate:'.length);
      const link = tools[key]?.link;
      node.properties.href = link || '#';
      node.properties.rel = ['sponsored', 'nofollow', 'noopener'];
      node.properties.target = '_blank';
      if (!link) node.properties.dataMissingAffiliate = key;
    });
  };
}
