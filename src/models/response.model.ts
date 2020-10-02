import { Characters } from "./character.model";

export interface ResponseModel {
  count: number;
  next: string;
  previous: string;
  results: Characters[];
}
