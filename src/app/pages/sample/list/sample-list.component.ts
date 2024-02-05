import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ISample} from '../models/sample.interface';
import {Sample} from '../models/sample.model';
import {ListBaseComponent} from '../../../shared/component-base/list-base/list-base.component';
import {SampleListService} from '../services/sample-list.service';

@Component({
  selector: 'app-sample-list',
  templateUrl:
    '../../../shared/component-base/list-base/list-base.component.html'
})
export class SampleListComponent extends ListBaseComponent<ISample> {

  constructor(
    listService: SampleListService,
    route: ActivatedRoute
  ) {
    super(Sample, listService);
  }
}
