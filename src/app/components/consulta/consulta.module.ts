import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { ConsultaRouting, CONSULTA_COMPONENTS } from './consulta.routing';








@NgModule({
  imports: [
    CommonModule,
    ConsultaRouting,
    MaterialModule
  ],
  declarations: [CONSULTA_COMPONENTS]
})
export class ConsultaModule { }
