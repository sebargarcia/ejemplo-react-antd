import { Characters } from "./character.model";

export interface Paginator {
  count: number;
  next: string;
  previous: string;
  results: Characters[];
}
