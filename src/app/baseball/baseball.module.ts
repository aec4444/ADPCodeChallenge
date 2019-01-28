import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BaseballRoutingModule } from './baseball-routing.module';
import { BaseballAPIConfiguration } from './models/baseball-api-configuration';
import { LeagueListComponent } from './league-list/league-list.component';
import { BaseballDataService } from './baseball-data.service';
import { AdpUiComponentsModule } from '@adp/uiComponents';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamEditComponent } from './team-edit/team-edit.component';

/**
 * Baseball module allows displaying baseball teams, leagues, etc.
 */
@NgModule({
  declarations: [
    LeagueListComponent,
    HomeComponent,
    TeamListComponent,
    TeamEditComponent
  ],
  imports: [
    CommonModule,
    BaseballRoutingModule,
    AdpUiComponentsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    BaseballDataService
  ],
  exports: [
    TeamListComponent,
    LeagueListComponent,
    HomeComponent
  ]
})
export class BaseballModule {
  static forRoot(config: BaseballAPIConfiguration): ModuleWithProviders {
    return {
      ngModule: BaseballModule,
      providers: [
        { provide: BaseballAPIConfiguration, useValue: config},
        BaseballDataService
      ]
    };
  }
}
