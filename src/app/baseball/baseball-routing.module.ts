import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TeamEditComponent } from './team-edit/team-edit.component';

const routes: Routes = [
  {
    path: 'list/:lid/:tid',
    component: HomeComponent
  },
  {
    path: 'list/:lid',
    component: HomeComponent
  },
  {
    path: 'list',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'edit/:id',
    component: TeamEditComponent
  },
  // {
  //   path: '**',
  //   redirectTo: ''
  // }
];

/**
 * Routing for the baseball module of the application
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseballRoutingModule { }
