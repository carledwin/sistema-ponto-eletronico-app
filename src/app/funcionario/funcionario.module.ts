import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MatInputModule,
      MatButtonModule,
      MatListModule,
      MatTooltipModule,
      MatIconModule,
      MatSnackBarModule,
      MatTableModule,
      MatPaginatorModule,
      MatSortModule,
      MatCardModule,
      MatPaginatorIntl} from '@angular/material';
import { LancamentoService,
          HttpUtilService} from '../shared';
import { PtBrMatPaginatorIntl } from './../shared/pt-br-mat-paginator-intl';
import { SharedModule } from './../shared/shared.module';
import { ListagemComponent,
          LancamentoComponent,
          FuncionarioComponent } from './components';

@NgModule({
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
    MatCardModule,
    SharedModule
  ],
  declarations: [
    ListagemComponent,
    LancamentoComponent,
    FuncionarioComponent
  ],
  providers: [
    HttpUtilService,
    LancamentoService,
    {provide: MatPaginatorIntl, useClass: PtBrMatPaginatorIntl}
  ]
})

export class FuncionarioModule { }
