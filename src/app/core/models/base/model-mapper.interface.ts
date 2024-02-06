// A base mapper class to consider in base service
// All mappers must implement IModelMapper

import {IBaseModel} from './base-model.interface';

export interface IModelMapper<T extends IBaseModel> {
  toModel(json: T): T;
}
