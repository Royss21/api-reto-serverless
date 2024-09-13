export interface ISwapiResponse<T> {
  count: number;
  next: string;
  previous: null;
  results: T[];
}
