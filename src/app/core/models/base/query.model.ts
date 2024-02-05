import {IQueryModel} from './query-model.interface';

export class QueryModel implements IQueryModel {
  constructor(
    public page: number = 0,
    public size: number = 100,
    public sort?: string,
    public filter?: string
  ) {
  }
}
