import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule} from '@angular/router';

import {FlexLayoutModule} from '@angular/flex-layout';

import { LancamentoService,
          HttpUtilService } from './../shared/services';

import { ListagemComponent,
  LancamentoComponent,
          FuncionarioComponent } from './components';
import { MatInputModule,
          MatButtonModule,
          MatListModule,
          MatTooltipModule,
          MatIconModule,
          MatSnackBarModule,
          MatTableModule,
          MatPaginatorModule,
          MatSortModule,
          MatCardModule } from '@angular/material';

@NgModule({
  declarations: [
    ListagemComponent,
    LancamentoComponent,
    FuncionarioComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule
  ],
  providers: [
    HttpUtilService,
    LancamentoService
  ]
})
export class FuncionarioModule { }
