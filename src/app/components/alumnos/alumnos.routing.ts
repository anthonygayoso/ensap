import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangePasswordComponent } from 'src/app/dialogs/change-password/change-password.component';
import { MenuComponent } from 'src/app/shared/components/menu/menu.component';
import { ActualizacionClaveComponent } from './pagina/actualizacion-clave/actualizacion-clave.component';
import { CargaMasivaComponent } from './pagina/carga-masiva/carga-masiva.component';
import { CorreoSmsmasivoComponent } from './pagina/correo-smsmasivo/correo-smsmasivo.component';

export const ALUMNOS_COMPONENTS = [
  CargaMasivaComponent,
  ActualizacionClaveComponent,
  CorreoSmsmasivoComponent,
  ChangePasswordComponent
];

const routes: Routes = [
  {
    path:'alumnos',
    component : MenuComponent,
    children : [
      {
        path : 'carga-masiva',
        component : CargaMasivaComponent
    },
    {
      path : 'actualizacion-clave',
      component : ActualizacionClaveComponent
    },
    {
      path : 'correo-smsmasivo',
      component : CorreoSmsmasivoComponent
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

export class AlumnosRouting { }
