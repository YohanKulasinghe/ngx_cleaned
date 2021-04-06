import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { OverviewModule } from './overview/overview.module';

import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { DailyCollectionModule } from './daily-collection/daily-collection.module';
import { ProductionModule } from './production/production.module';
import { TappersModule } from './tappers/tappers.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    OverviewModule,
    DailyCollectionModule,
    ProductionModule,
    TappersModule,
    MiscellaneousModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule { 
}
