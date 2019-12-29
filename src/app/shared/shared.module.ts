import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascaraDirective } from './directives/mascara.directive';
import { TipoPipe, DataPipe, PtBrMatPaginatorIntl } from './';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MascaraDirective,
    TipoPipe,
    DataPipe
  ],
  exports: [
    MascaraDirective,
    TipoPipe,
    DataPipe
  ],
  providers:[
    PtBrMatPaginatorIntl
  ]
})
export class SharedModule { }
