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
        FuncionarioService,
        PtBrMatPaginatorIntl} from '../shared';

import {ListagemComponent,
        CadastroComponent,
        AtualizacaoComponent,
        AdminComponent,
        ConfirmarDialog, } from './components';

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
    MatSortModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ListagemComponent,
    CadastroComponent,
    AtualizacaoComponent,
    AdminComponent,
    ConfirmarDialog,
  ],
  providers: [
    LancamentoService,
    FuncionarioService,
    HttpUtilService,
    MatPaginatorIntl,
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
    {provide: MatPaginatorIntl, useClass: PtBrMatPaginatorIntl}
  ],
  entryComponents: [
    ConfirmarDialog
  ]
})
export class AdminModule { }
