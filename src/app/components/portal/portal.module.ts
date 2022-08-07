import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { PortalRouting, PORTAL_COMPONENTS } from './portal.routing';




@NgModule({
  imports: [
    CommonModule,
    PortalRouting,
    MaterialModule
  ],
  declarations: [PORTAL_COMPONENTS]
})
export class PortalModule { }
