import {Type} from '@angular/core';
import {IBaseModel} from '../../models/base/base-model.interface';
import {IModelMapper} from '../../models/base/model-mapper.interface';

export abstract class ModelMapperBase<T extends IBaseModel>
  implements IModelMapper<T> {
  protected constructor(public modelClass: Type<T>) {
  }

  public abstract mapAssociations(json: T, model: T): void;

  protected mapPrimitiveProperties(json: T, model: T): void {
    if (json && model) {
      for (const jpr of Object?.keys(json)) {
        for (const mpr of Object?.keys(model)) {
          if (jpr && mpr && jpr.toLowerCase() === mpr.toLowerCase()) {
            // @ts-ignore
            model[mpr] = json[jpr];
          }
        }
      }
    }
  }

  public toModel(json: T): T {
    const model = new this.modelClass();
    this.mapPrimitiveProperties(json, model);
    this.mapAssociations(json, model);
    return model;
  }
}
