import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from 'src/app/shared/components/menu/menu.component';
import { DashboardComponent } from './pagina/dashboard.component';






export const DASHBOARD_COMPONENTS = [
  DashboardComponent,

];

const routes: Routes = [

  {
    path : 'midashboard',
    component : MenuComponent,
    children : [ 
      {
        path: 'dashboard',
        component: DashboardComponent
      },
    ]
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class DashboardRouting { }
