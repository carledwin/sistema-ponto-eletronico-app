import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule,
        MatIconModule} from '@angular/material';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // o modulo root deve sempre ser o ultimo
import { AdminModule,
          AdminRoutingModule } from './admin';
import { FuncionarioRoutingModule,
          FuncionarioModule } from './funcionario';
import { LoginModule,
        LoginRoutingModule,
        CadastroPjModule,
        CadastroPjRoutingModule,
        CadastroPfModule,
        CadastroPfRoutingModule } from './autenticacao';

@NgModule({
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
    AdminModule,
    AdminRoutingModule,
    FuncionarioModule,
    FuncionarioRoutingModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
