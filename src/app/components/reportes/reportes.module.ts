import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { ReportesRouting, REPORTES_COMPONENTS } from './reportes.routing';
import { SharedModule } from 'src/app/shared/shared.module';






@NgModule({
  imports: [
    CommonModule,
    ReportesRouting,
    SharedModule,
    MaterialModule
  ],
  declarations: [REPORTES_COMPONENTS]
})
export class ReportesModule { }