import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pagina/login.component';






export const LOGIN_COMPONENTS = [
  LoginComponent
];

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
     
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

export class LoginRouting { }