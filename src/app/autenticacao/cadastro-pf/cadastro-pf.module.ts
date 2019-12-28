import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { CadastrarPfComponent } from './components/cadastrar-pf/cadastrar-pf.component';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CadastrarPfService } from './services';

import {
  MatInputModule,
  MatButtonModule,
  MatListModule,
  MatTooltipModule,
  MatIconModule,
  MatSnackBarModule
} from '@angular/material';

import { SharedModule } from './../../shared/shared.module';

import { CadastrarPfComponent,
          CadastroPfComponent } from './components';

@NgModule({
  declarations: [
    CadastrarPfComponent,
    CadastroPfComponent,
  ],
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
  providers: [
    CadastrarPfService
  ]
})
export class CadastroPfModule { }
