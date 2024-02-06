import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {CrudBaseService} from '../../../core/services/base/form-base.service';
import {ISample} from '../models/sample.interface';
import {SampleMapperService} from '../models/sample-mapper.service';

@Injectable({providedIn: 'root'})
export class SampleFormService extends CrudBaseService<ISample> {
  /**
   * All crud methods have implemented in the CrudBaseService
   * you can override them here, or add a new
   * @param http
   * @param mapper
   */
  constructor(http: HttpClient, mapper: SampleMapperService) {
    super('sample', http, mapper);
  }
}
