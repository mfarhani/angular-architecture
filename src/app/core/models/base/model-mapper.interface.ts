import {IBaseModel} from './base-model.interface';

export interface IModelMapper<T extends IBaseModel> {
  toModel(json: T): T;
}
