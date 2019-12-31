import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {
        MatSelect,
        MatTableDataSource,
        MatSnackBar,
        MatDialog,
        MatDialogRef,
        MAT_DIALOG_DATA,
        PageEvent,
        Sort
} from '@angular/material';

import {
  LancamentoService,
  FuncionarioService,
  Lancamento,
  Funcionario,
  Tipo,
  HttpUtilService
} from '../../../shared';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  dataSource: MatTableDataSource<Lancamento>;
  colunas: string[] = ['data', 'tipo', 'localizacao', 'acao'];
  funcionarioId: string;
  totalLancamentos: number;

  funcionarios: Funcionario[];
  @ViewChild(MatSelect, {static: true}) matSelect: MatSelect;
  form: FormGroup;

  private pagina: number;
  private ordem: string;
  private direcao: string;

  constructor(private lancamentoService: LancamentoService,
              private httpUtilService: HttpUtilService,
              private matSnackBar: MatSnackBar,
              private funcionarioService: FuncionarioService,
              private formBuilder: FormBuilder,
              private matDialog: MatDialog) { }

  ngOnInit() {
    this.pagina = 0;
    this.ordemPadrao();
    this.obterFuncionarios();
    this.gerarForm();
  }

  gerarForm() {
    this.form = this.formBuilder.group({
      funcs: ['', []]
    });
  }

  get funcId(): string {
    return sessionStorage['funcionarioId'] || false;
  }

  obterFuncionarios() {

    return this.funcionarioService.listarFuncionariosPorEmpresa()
          .subscribe(
            data => {
              const usuarioId: string = this.httpUtilService.obterIdUsuario();
              this.funcionarios = (data.data  as Funcionario[])
                                    .filter(func => func.id != usuarioId);

              if(this.funcId){
                this.form.get('funcs').setValue(parseInt(this.funcId, 10));
                this.exibirLancamentos();
              }
            },
            err => {
              const msg: string = 'Erro obtendo funcionários';
              this.matSnackBar.open(msg, "Erro", {duration: 500});
            }
          );
  }

  ordemPadrao(){
    this.ordem = 'data';
    this.direcao = 'DESC';
  }

  exibirLancamentos(){

    if(this.matSelect.selected){
      this.funcionarioId = this.matSelect.selected['value'];
    }else if(this.funcId) {
      this.funcionarioId = this.funcId;
    }else{
      return;
    }

    sessionStorage['funcionarioId'] = this.funcionarioId;

    this.lancamentoService.listarLancamentosPorFuncionario(this.funcionarioId, this.pagina, this.ordem, this.direcao)
    .subscribe(
      data => {
        this.totalLancamentos = data['data'].totalElements;
        const lancamentos = data['data'].content as Lancamento[];
        this.dataSource = new MatTableDataSource<Lancamento>(lancamentos);
      },
      err => {
        const msg: string = 'Erro obtendo lançamentos';
        this.matSnackBar.open(msg, "Erro", {duration: 5000});
      }
    );
  }

  removerDialog(lancamentoId: string){
    const dialog = this.matDialog.open(ConfirmarDialog, {});
    dialog.afterClosed().subscribe(
      remover => {
        if(remover){
          this.removerLancamento(lancamentoId);
        }
      });
  }

  removerLancamento(lancamentoId: string){

    this.lancamentoService.remover(lancamentoId)
          .subscribe(
            data => {
              const msg: string = 'Lançamento removido com sucesso';
              this.matSnackBar.open(msg, "Sucesso", {duration: 500});
              this.exibirLancamentos();
            },
            err => {
              let msg: string = 'Tente novamente em instantes';
              if(err.status == 400){
                msg = err.error.errors.join(' ');
              }
              this.matSnackBar.open(msg, "Erro", {duration: 5000});
            }
          );
  }

  paginar(pageEvent: PageEvent){
    this.pagina = pageEvent.pageIndex;
    this.exibirLancamentos();
  }

  ordenar(sort: Sort){

    if(sort.direction ==''){
      this.ordemPadrao();
    }else{
      this.ordem = sort.active;
      this.direcao = sort.direction.toUpperCase();
    }

    this.exibirLancamentos();
  }
}

@Component({
  selector: 'confirmar-dialog',
  template: `
    <h1 mat-dialog-title>Deseja realmente remover o lancamento?</h1>
    <div mat-dialog-actions>
      <button mat-button [mat-dialog-close]="false" tabindex="-1">
        Não
      </button>
      <button mat-button [mat-dialog-close]="true" tabindex="2">
        Sim
      </button>
    </div>
  `
})
export class ConfirmarDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any){}
}
