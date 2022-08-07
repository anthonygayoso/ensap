import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from 'src/app/shared/components/menu/menu.component';
import { ActualizacionesComponent } from './pagina/actualizaciones/actualizaciones.component';
import { AlumnosComponent } from './pagina/alumnos/alumnos.component';
import { CursosComponent } from './pagina/cursos/cursos.component';
import { NotificacionesComponent } from './pagina/notificaciones/notificaciones.component';







export const REPORTES_COMPONENTS = [
  ActualizacionesComponent,
  NotificacionesComponent,
  CursosComponent,
  AlumnosComponent
];

const routes: Routes = [
  {
    path:'reportes',
    component : MenuComponent,
    children : [
      {
        path : 'actualizaciones',
        component : ActualizacionesComponent
    },
    {
      path : 'notificaciones',
      component : NotificacionesComponent
    },
    {
      path : 'cursos',
      component : CursosComponent
    },
    {
      path : 'alumnos',
      component : AlumnosComponent
    }


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

export class ReportesRouting { }
