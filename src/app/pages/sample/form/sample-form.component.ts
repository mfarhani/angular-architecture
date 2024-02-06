import {Component, OnInit} from '@angular/core';
import {SampleFormService} from '../services/sample-form.service';
import {MatDialogRef} from '@angular/material/dialog';
import {ISample} from '../models/sample.interface';
import {Sample} from '../models/sample.model';

@Component({
  selector: 'app-sample-form',
  templateUrl: 'sample-form.component.html',
  styleUrl: 'sample-form.component.scss'
})
export class SampleFormComponent
  implements OnInit {
  model: ISample = new Sample();

  constructor(
    private service: SampleFormService,
    private dialogRef: MatDialogRef<SampleFormComponent>
  ) {

  }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }

  save(): void {
    this.service.create(this.model).subscribe(response => console.log(response));
    this.dialogRef.close(this.model);
  }
}
