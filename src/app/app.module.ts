import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlumnosModule } from './components/alumnos/alumnos.module';
import { ReportesModule } from './components/reportes/reportes.module';
import { MiscursosModule } from './components/miscursos/miscursos.module';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PerfilModule } from './components/perfil/perfil.module';
import { ConsultaModule } from './components/consulta/consulta.module';
import { LoginModule } from './components/login/login.module';
import { ActividadesModule } from './components/actividades/actividades.module';
import { PortalModule } from './components/portal/portal.module';
import { DashboardModule } from './components/dashboard/dashboard.module';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ActividadesModule,
    AlumnosModule,
    ReportesModule,
    MiscursosModule,
    PerfilModule,
    ConsultaModule,
    PortalModule,
    LoginModule,
    DashboardModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
