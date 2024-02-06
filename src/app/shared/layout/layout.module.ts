import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {LayoutRoutingModule} from './layout-routing.module';
import {MainLayoutComponent} from './main-layout/main-layout.component';
import {HeaderComponent} from './main-layout/header/header.component';
import {MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';
import {MatDivider} from '@angular/material/divider';

@NgModule({
  declarations: [MainLayoutComponent, HeaderComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatIconButton,
    MatIcon,
    MatMenu,
    MatMenuItem,
    MatDivider,
    MatMenuTrigger
  ]
})
export class LayoutModule {
}
