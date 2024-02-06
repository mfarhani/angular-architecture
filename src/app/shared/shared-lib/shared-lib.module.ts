import {NgModule} from '@angular/core';
import {MatFormField} from '@angular/material/form-field';
import {DxBulletModule, DxDataGridModule, DxTemplateModule} from 'devextreme-angular';
import {MatDialogConfig} from '@angular/material/dialog';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [ReactiveFormsModule, DxDataGridModule,
    DxTemplateModule,
    DxBulletModule, MatFormField],
  exports: [ReactiveFormsModule, DxDataGridModule,
    DxTemplateModule,
    DxBulletModule, MatFormField],
  providers: [MatDialogConfig]
})
export class SharedLibModule {
}
