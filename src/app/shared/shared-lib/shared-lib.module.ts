import {NgModule} from '@angular/core';
import {MatFormField} from '@angular/material/form-field';
import {DxBulletModule, DxDataGridModule, DxTemplateModule} from 'devextreme-angular';

@NgModule({
  imports: [DxDataGridModule,
    DxTemplateModule,
    DxBulletModule, MatFormField],
  exports: [DxDataGridModule,
    DxTemplateModule,
    DxBulletModule, MatFormField]
})
export class SharedLibModule {
}
