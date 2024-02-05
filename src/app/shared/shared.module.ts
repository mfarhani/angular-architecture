import {NgModule} from '@angular/core';
import {LayoutModule} from './layout/layout.module';
import {SharedLibModule} from './shared-lib/shared-lib.module';

@NgModule({
  declarations: [],
  imports: [
    LayoutModule,
    SharedLibModule
  ],
  exports: [
    LayoutModule,
    SharedLibModule

  ]
})
export class SharedModule {
}
