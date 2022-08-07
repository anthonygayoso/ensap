import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;

  constructor(private router: Router, private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      usuario : ['', Validators.required],
      password : ['', [Validators.required, Validators.]]
    });
  }

  navigateToIntranet(){

    //validacion clasica
    // if (this.loginForm.valid) {
    //   console.log('Llamando servicio');
    // }else{
    //   console.log('Llena tu informarcion completa por favor');
    // }

    //validacion directa
    // if (this.loginForm.invalid) {
    //   return
    // }

    console.log(this.loginForm.value)

    //this.router.navigateByUrl('/midashboard/dashboard');
  }

}
