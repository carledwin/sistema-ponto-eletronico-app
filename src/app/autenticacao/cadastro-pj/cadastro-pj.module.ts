import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

// import { CadastrarPjComponent } from './components/cadastrar-pj/cadastrar-pj.component';
import { MatInputModule,
  MatButtonModule,
  MatListModule,
  MatTooltipModule,
  MatIconModule,
  MatSnackBarModule } from '@angular/material';

import {CadastroPjComponent, CadastrarPjComponent } from './components';

import { CadastroPjService } from './services';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    SharedModule
  ],
  declarations: [
    CadastrarPjComponent,
    CadastroPjComponent
  ],
  providers: [
    CadastroPjService
  ]
})
export class CadastroPjModule { }
