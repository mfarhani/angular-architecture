import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ListBaseService} from '../../../core/services/base/list-base.service';
import {ISample} from '../models/sample.interface';
import {SampleMapperService} from '../models/sample-mapper.service';

@Injectable({ providedIn: 'root' })
export class SampleListService extends ListBaseService<ISample> {
  constructor(http: HttpClient, mapper: SampleMapperService) {
    super('/Base/Project/list', http, mapper);
  }
}
