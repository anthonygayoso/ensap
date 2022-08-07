import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from 'src/app/shared/components/menu/menu.component';
import { MiscursosComponent } from './pagina/miscursos.component';



export const MISCURSOS_COMPONENTS = [
  MiscursosComponent
];

const routes: Routes = [
  {
    path : '',
    component : MenuComponent,
    children : [ 
      {
        path: 'miscursos',
        component: MiscursosComponent
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

export class MiscursosRouting { }



