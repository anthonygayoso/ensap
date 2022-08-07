import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { MiscursosRouting, MISCURSOS_COMPONENTS } from './miscursos.routing';







@NgModule({
  imports: [
    CommonModule,
    MiscursosRouting,
    MaterialModule
  ],
  declarations: [MISCURSOS_COMPONENTS]
})
export class MiscursosModule { }