import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SampleFormService} from '../services/sample-form.service';

@Component({
  selector: 'app-sample-form',
  template:
    '<div>sample form</div>'
})
export class SampleFormComponent
  implements OnInit {
  constructor(
    protected service: SampleFormService,
    protected activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
  }
}
