export interface CollectionApi {
  id: number;
  handle: string;
  title: string;
  updated_at: string;
  published_at: string;
  rules: CollectionRuleApi[];
}

interface CollectionRuleApi {
  column: string;
  relation: string;
  condition: string;
}
