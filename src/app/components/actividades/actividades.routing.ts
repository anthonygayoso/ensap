import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from 'src/app/shared/components/menu/menu.component';
import { CertificacionComponent } from './pagina/certificacion/certificacion.component';
import { DiplomadoComponent } from './pagina/diplomado/diplomado.component';
import { ReconocimientoComponent } from './pagina/reconocimiento/reconocimiento.component';








export const ACTIVIDADES_COMPONENTS = [
  CertificacionComponent,
  DiplomadoComponent,
  ReconocimientoComponent
];

const routes: Routes = [
  {
    path:'actividades',
    component : MenuComponent,
    children : [
      {
        path : 'certificacion',
        component : CertificacionComponent
      },
    {
      path : 'diplomado',
      component : DiplomadoComponent
    },
    {
      path : 'reconocimiento',
      component : ReconocimientoComponent
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

export class ActividadesRouting { }
