import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { LoginRouting, LOGIN_COMPONENTS } from './login.routing';









@NgModule({
  imports: [
    CommonModule,
    LoginRouting,
    MaterialModule
  ],
  declarations: [LOGIN_COMPONENTS]
})
export class LoginModule { }