import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { PerfilRouting, PERFIL_COMPONENTS } from './perfil.routing';








@NgModule({
  imports: [
    CommonModule,
    PerfilRouting,
    MaterialModule
  ],
  declarations: [PERFIL_COMPONENTS]
})
export class PerfilModule { }