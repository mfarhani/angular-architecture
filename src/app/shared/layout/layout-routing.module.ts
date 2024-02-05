import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from './main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'sample',
        loadChildren: () =>
          import('../../pages/sample/sample.module').then((m) => m.SampleModule)
      },
      {
        path: 'home',
        loadChildren: () =>
          import('../../pages/home/home.module').then((m) => m.HomeModule)
      },
      {
        path: '',
        redirectTo: 'sample',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {
}
