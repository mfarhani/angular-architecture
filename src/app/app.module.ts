import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DxBulletModule, DxDataGridModule, DxTemplateModule} from 'devextreme-angular';
import {SharedModule} from './shared/shared.module';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {CoreModule} from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    SharedModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
