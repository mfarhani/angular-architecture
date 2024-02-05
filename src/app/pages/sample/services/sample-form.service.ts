import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {CrudBaseService} from '../../../core/services/base/form-base.service';
import {ISample} from '../models/sample.interface';
import {SampleMapperService} from '../models/sample-mapper.service';

@Injectable({providedIn: 'root'})
export class SampleFormService extends CrudBaseService<ISample> {
  constructor(http: HttpClient, mapper: SampleMapperService) {
    super('sample', http, mapper);
  }
}
