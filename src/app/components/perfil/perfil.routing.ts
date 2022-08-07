import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from 'src/app/shared/components/menu/menu.component';
import { PerfilComponent } from './pagina/perfil.component';





export const PERFIL_COMPONENTS = [
  PerfilComponent,

];

const routes: Routes = [

  {
    path : 'miperfil',
    component : MenuComponent,
    children : [ 
      {
        path: 'perfil',
        component: PerfilComponent
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

export class PerfilRouting { }
