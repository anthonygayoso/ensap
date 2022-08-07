import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortalComponent } from './pagina/portal.component';


export const PORTAL_COMPONENTS = [
  PortalComponent
];

const routes: Routes = [
  {
    path: 'portal',
    component: PortalComponent
     
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

export class PortalRouting { }
