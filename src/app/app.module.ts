import { FuncionarioRoutingModule } from './funcionario/funcionario-routing.module';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatToolbarModule,
        MatIconModule} from '@angular/material';

import {FlexLayoutModule} from '@angular/flex-layout';

import { LoginModule,
        LoginRoutingModule,
        CadastroPjModule,
        CadastroPjRoutingModule,
        CadastroPfModule,
        CadastroPfRoutingModule } from './autenticacao';
import { AppRoutingModule } from './app-routing.module'; // o modulo root deve sempre ser o ultimo

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    LoginModule,
    LoginRoutingModule,
    CadastroPjModule,
    CadastroPjRoutingModule,
    CadastroPfModule,
    CadastroPfRoutingModule,
    FuncionarioModule,
    FuncionarioRoutingModule,
    AppRoutingModule
  ],
  // o modulo root deve sempre ser o ultimo, se importar um modulo filho apos um modulo pai, ele não sera reconhecido pela aplicacao
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
