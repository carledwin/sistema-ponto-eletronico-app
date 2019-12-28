import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import {Tipo,
        LancamentoService,
        Lancamento,
        HttpUtilService} from '../../../shared';
import * as moment from 'moment';

declare var navigator: any;

@Component({
  selector: 'app-lancamento',
  templateUrl: './lancamento.component.html',
  styleUrls: ['./lancamento.component.css']
})
export class LancamentoComponent implements OnInit {

  private dataAtualEn: string;
  dataAtual: string;
  geoLocation: string;
  ultimoTipoLancamento: string;

  constructor(private matSnackBar: MatSnackBar,
              private router: Router,
              private httpUtilService: HttpUtilService,
              private lancamentoService: LancamentoService) { }

  ngOnInit() {
    this.dataAtualEn = moment().format('DD/MM/YYYY HH:mm:ss');
    this.dataAtual = moment().format('YYYY-MM-DD HH:mm:ss');
    this.obterGeoLocation();
    this.ultimoTipoLancamento = '';
    this.obterUltimoLancamento();
  }

  obterGeoLocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(
        position => {
          console.log( 'Geolocation: ' + `${position.coords.latitude}, ${position.coords.longitude}`);
          this.geoLocation = `${position.coords.latitude}, ${position.coords.longitude}`;
        }
      );
    }

    return '';
  }

  obterUltimoLancamento(){

    //this.ultimoTipoLancamento = Tipo.INICIO_TRABALHO;

    this.lancamentoService.buscarUltimoTipoLancado()
      .subscribe(
        data => {
          this.ultimoTipoLancamento = data.data ? data.data.tipo : '';
        },
        err => {
          const msg: string = 'Erro obtendo o último lançamento';
          this.matSnackBar.open(msg, "Erro", {duration: 5000});
        }
      );
  }

  cadastrar(tipo: Tipo){

    console.log(`Tipo: ${tipo}, dataAtualEn: ${this.dataAtualEn}, geoLocation: ${this.geoLocation}`);

    const lancamento: Lancamento = new Lancamento(this.dataAtual,
                                                  tipo,
                                                  this.geoLocation,
                                                  this.httpUtilService.obterIdUsuario());

    this.lancamentoService.cadastrar(lancamento)
      .subscribe(
        data => {
          const msg: string = 'Lançamento realizado com sucesso';
          this.matSnackBar.open(msg, "Sucesso", {duration: 5000});
          this.router.navigate(['/funcionario/listagem']);
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

  obterUrlMapa(): string {
    return "https://www.google.com/maps/search/?api=1&query=" + this.geoLocation;
  }

  exibirInicioTrabalho(): boolean {
    return this.ultimoTipoLancamento == ''
    || this.ultimoTipoLancamento == Tipo.TERMINO_TRABALHO;
  }

  exibirTerminoTrabalho(): boolean {
    return this.ultimoTipoLancamento == Tipo.INICIO_TRABALHO
    || this.ultimoTipoLancamento == Tipo.TERMINO_ALMOCO;
  }

  exibirInicioAlmoco(): boolean {
    return this.ultimoTipoLancamento == Tipo.INICIO_TRABALHO;
  }

  exibirTerminoAlmoco(): boolean {
    return this.ultimoTipoLancamento == Tipo.INICIO_ALMOCO;
  }

  iniciarTrabalho(){
    this.cadastrar(Tipo.INICIO_TRABALHO);
  }

  terminarTrabalho(){
    this.cadastrar(Tipo.TERMINO_TRABALHO);
  }

  iniciarAlmoco(){
    this.cadastrar(Tipo.INICIO_ALMOCO);
  }

  terminarAlmoco(){
    this.cadastrar(Tipo.TERMINO_ALMOCO);
  }
}
