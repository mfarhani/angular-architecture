import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {LayoutRoutingModule} from './layout-routing.module';
import {MainLayoutComponent} from './main-layout/main-layout.component';
import {HeaderComponent} from './main-layout/header/header.component';

@NgModule({
  declarations: [MainLayoutComponent, HeaderComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule {
}
