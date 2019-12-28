import { Component, OnInit, ViewChild } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {MatTableDataSource,
        MatSnackBar,
        PageEvent,
        MatPaginator,
        Sort,
        MatSort} from '@angular/material';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {LancamentoService, Lancamento} from '../../../shared';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  dataSource: MatTableDataSource<Lancamento>;
  colunas: string[] = ['data', 'tipo', 'localizacao'];

  constructor(private lancamentoService: LancamentoService,
              private matSnackBar: MatSnackBar) { }

  ngOnInit() {

    console.log('Iniciando chamada com log: ');
    console.info('Iniciando chamada com info: ');
    this.lancamentoService.listarTodos()
    .subscribe(
      data => {

        console.log('%%%%%%% data: ' + JSON.stringify(data));
        const lancamentos = data['data'] as Lancamento[];
        this.dataSource = new MatTableDataSource<Lancamento>(lancamentos);
      },
      err => {
        const msg: string = "Erro ao tentar obter lancamentos";
        this.matSnackBar.open(msg, "Erro", {duration: 5000});
      }
    );

  }

}
