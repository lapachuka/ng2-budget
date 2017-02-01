export interface Expense {
  id?: number;
  parent_id?: number;
  name: string;
  updated_at?: string;
  sub_categories?: any[];
}
