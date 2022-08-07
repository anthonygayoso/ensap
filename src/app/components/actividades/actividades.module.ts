import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ActividadesRouting, ACTIVIDADES_COMPONENTS } from './actividades.routing';






@NgModule({
  imports: [
    CommonModule,
    ActividadesRouting,
    SharedModule,
    MaterialModule
  ],
  declarations: [ACTIVIDADES_COMPONENTS]
})
export class ActividadesModule { }