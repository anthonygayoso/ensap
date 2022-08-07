import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosRouting, ALUMNOS_COMPONENTS } from './alumnos.routing';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';






@NgModule({
  imports: [
    CommonModule,
    AlumnosRouting,
    SharedModule,
    MaterialModule
  ],
  declarations: [ALUMNOS_COMPONENTS]
})
export class AlumnosModule { }
