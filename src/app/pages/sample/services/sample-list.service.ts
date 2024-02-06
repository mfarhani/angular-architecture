import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ListBaseService} from '../../../core/services/base/list-base.service';
import {ISample} from '../models/sample.interface';
import {SampleMapperService} from '../models/sample-mapper.service';

@Injectable({providedIn: 'root'})
export class SampleListService extends ListBaseService<ISample> {
  /**
   * All needed methods have implemented in ListBaseService
   * But we can override them or add a new here
   * @param http
   * @param mapper
   */
  constructor(http: HttpClient, mapper: SampleMapperService) {
    super('/assets/mock-data/samples.json', http, mapper);
  }
}
