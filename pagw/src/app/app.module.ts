import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { XComponent } from './section/x/x.component';
import { HeaderComponent } from './section/header/header.component';
import { HeadersComponent } from './section/headers/headers.component';
import { TextoComponent } from './section/texto/texto.component';

@NgModule({
  declarations: [
    AppComponent,
    XComponent,
    HeaderComponent,
    HeadersComponent,
    TextoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
