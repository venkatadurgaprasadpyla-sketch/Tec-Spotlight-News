import data from '../../data/affiliates.json';

export interface AffiliateTool {
  name: string;
  program: string;
  link: string;
  commission: string;
  added: string;
}

const tools = data.tools as Record<string, AffiliateTool>;

export function getTool(key: string): AffiliateTool | undefined {
  return tools[key];
}

export const AFFILIATE_REL = 'sponsored nofollow noopener';
