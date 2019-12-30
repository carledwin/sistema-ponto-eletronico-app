import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatInputModule,
        MatButtonModule,
        MatListModule,
        MatTooltipModule,
        MatIconModule,
        MatSnackBarModule,
        MatTableModule,
        MatSelectModule,
        MatRadioModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MAT_DATE_LOCALE,
        MatDialogModule,
        MatPaginatorModule,
        MatPaginatorIntl,
        MatSortModule} from '@angular/material';
import {ReactiveFormsModule,
        FormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';

import {HttpUtilService,
        LancamentoService,
        PtBrMatPaginatorIntl} from '../shared';

import {ListagemComponent,
        CadastroComponent,
        AtualizacaoComponent,
        AdminComponent} from './components';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    MatTableModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule
  ],
  declarations: [
    ListagemComponent,
    CadastroComponent,
    AtualizacaoComponent,
    AdminComponent
  ],
  providers: [
    LancamentoService,
    HttpUtilService,
    MatPaginatorIntl,
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
    {provide: MatPaginatorIntl, useClass: PtBrMatPaginatorIntl}
  ]
})
export class AdminModule { }