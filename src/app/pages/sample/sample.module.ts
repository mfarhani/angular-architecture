import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {SampleListComponent} from './list/sample-list.component';
import {SharedModule} from '../../shared/shared.module';
import {SampleFormComponent} from './form/sample-form.component';
import {SampleRoutingModule} from './sample-routing.module';
import {MatLabel, MatSuffix} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatIcon} from '@angular/material/icon';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatDialogActions, MatDialogContainer, MatDialogContent} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [SampleFormComponent, SampleListComponent],
  imports: [CommonModule, SampleRoutingModule, SharedModule, MatLabel, MatInput, MatIcon, MatSuffix, MatIconButton, MatButton, MatDialogContainer, MatDialogContent, MatDialogActions, FormsModule]
})
export class SampleModule {
}
