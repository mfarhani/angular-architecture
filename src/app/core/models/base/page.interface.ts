// Base interface for all grid data

import {IBaseModel} from './base-model.interface';

export interface Page<T extends IBaseModel> {
  data: T[];
  totalRecords: number;
}
