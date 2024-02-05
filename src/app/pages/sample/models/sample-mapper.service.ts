import {Injectable} from '@angular/core';
import {ModelMapperBase} from '../../../core/services/base/model-mapper-base';
import {ISample} from './sample.interface';
import {Sample} from './sample.model';

@Injectable({providedIn: 'root'})
export class SampleMapperService extends ModelMapperBase<ISample> {
  constructor() {
    super(Sample);
  }

  mapAssociations(json: any, model: ISample): void {
  }
}
