import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseballModule } from '@adp/baseball';

const routes: Routes = [
  {
    path: 'baseball',
    // component: HomeComponent
    loadChildren: () => BaseballModule
  },
  {
    path: '',
    redirectTo: 'baseball',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
