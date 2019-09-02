import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegistroComponent } from './registro/registro.component';
import { ConsultaComponent } from './consulta/consulta.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {IndependienteServicio} from "./servicios/IndependienteServicio";
import {HttpClientModule} from "@angular/common/http";
import {MatNativeDateModule} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistroComponent,
    ConsultaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AppMaterialModule,
    HttpClientModule,
    MatNativeDateModule
  ],
  providers: [
    IndependienteServicio
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
