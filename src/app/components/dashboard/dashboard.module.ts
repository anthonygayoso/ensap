import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { DashboardRouting, DASHBOARD_COMPONENTS } from './dashboard.routing';









@NgModule({
  imports: [
    CommonModule,
    DashboardRouting,
    MaterialModule
  ],
  declarations: [DASHBOARD_COMPONENTS]
})
export class DashboardModule { }
