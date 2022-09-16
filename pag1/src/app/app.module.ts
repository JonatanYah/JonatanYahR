import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './seccion1/header/header.component';
import { TextoComponent } from './section/texto/texto.component';
import { CajasComponent } from './section/cajas/cajas.component';
import { FondoComponent } from './section/fondo/fondo.component';
import { Fondo2Component } from './section/fondo2/fondo2.component';
import { Fondo3Component } from './section/fondo3/fondo3.component';
import { HomeComponent } from './section/home/home.component';
import { AppRoutingModule } from './section/app-routing.module';
import { NavBarComponent } from './section/nav-bar/nav-bar.component';
import { Seccion2Component } from './section/seccion2/seccion2.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TextoComponent,
    CajasComponent,
    FondoComponent,
    Fondo2Component,
    Fondo3Component,
    HomeComponent,
    NavBarComponent,
    Seccion2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
