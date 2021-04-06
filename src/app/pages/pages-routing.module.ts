import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { OverviewComponent } from './overview/component/overview/overview.component';
import { DailyCollectionComponent } from './daily-collection/component/daily-collection/daily-collection.component';
import { ProductionComponent } from './production/component/production/production.component';
import { TappersComponent } from './tappers/component/tappers/tappers.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'overview',
      component: OverviewComponent,
    },
    {
      path: 'dailycollection',
      component: DailyCollectionComponent,
    },
    {
      path: 'production',
      component: ProductionComponent,
    },
    {
      path: 'tappers',
      component: TappersComponent,
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
