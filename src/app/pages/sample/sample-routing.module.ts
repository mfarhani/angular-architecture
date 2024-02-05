import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SampleListComponent} from './list/sample-list.component';

const routes: Routes = [
  {
    path: '',
    component: SampleListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SampleRoutingModule {
}
