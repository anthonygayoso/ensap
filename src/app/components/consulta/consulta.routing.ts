import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultaComponent } from './pagina/consulta.component';




export const CONSULTA_COMPONENTS = [
  ConsultaComponent
];

const routes: Routes = [
  {
    path: 'consulta',
    component: ConsultaComponent
     
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

export class ConsultaRouting { }