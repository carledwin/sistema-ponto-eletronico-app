import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment as env } from '../../../environments/environment';
import {Lancamento} from '../models';
import {HttpUtilService} from './http-util.service';

@Injectable()
export class LancamentoService {

  private readonly LANCAMENTOS_BASE_PATH: string = 'lancamentos';
  private readonly ULTIMO_LANCAMENTO_PATH: string = '/funcionarios/{funcionarioId}/ultimo';
  private readonly LANCAMENTOS_TODOS_BY_FUNCIONARIO_ID_PATH: string = '/funcionarios/{funcionarioId}/todos';
  private readonly LANCAMENTOS_BY_FUNCIONARIO_ID_PATH: string = '/funcionarios/{funcionarioId}';

  constructor(private httpClient: HttpClient,
              private httpUtilService: HttpUtilService) { }


  buscarUltimoTipoLancado(): Observable<any>{

    const token: string = localStorage['token'];
    const bearerToken: string = "Bearer " + token;
    const headers = new HttpHeaders().set("Authorization", bearerToken);

    const url = env.baseUrl +
                this.LANCAMENTOS_BASE_PATH +
                this.ULTIMO_LANCAMENTO_PATH.replace('{funcionarioId}', this.httpUtilService.obterIdUsuario());

    return this.httpClient.get(url, this.httpUtilService.headers());
  }

  cadastrar(lancamento: Lancamento): Observable<any>{

    return this.httpClient.post(env.baseUrl + this.LANCAMENTOS_BASE_PATH,
      lancamento,
      this.httpUtilService.headers());
  }

  listarTodos(): Observable<any> {

    return this.httpClient.get(
      env.baseUrl +
      this.LANCAMENTOS_BASE_PATH +
      this.LANCAMENTOS_TODOS_BY_FUNCIONARIO_ID_PATH.replace('{funcionarioId}', this.httpUtilService.obterIdUsuario()),
      this.httpUtilService.headers()
    );
  }

  listarLancamentosPorFuncionario(funcionarioId: string, pagina: number, ordem: string, direcao: string): Observable<any> {

    const url: string = env.baseUrl + this.LANCAMENTOS_BASE_PATH + this.LANCAMENTOS_BY_FUNCIONARIO_ID_PATH.replace('{funcionarioId}', funcionarioId);

    const params: string = '?page' + pagina +
                            '&order' + ordem +
                            '&direction'+ direcao;

    return this.httpClient.get(url + params, this.httpUtilService.headers());
  }

  remover(lancamentoId: string): Observable<any> {
    const url = env.baseUrl + this.LANCAMENTOS_BASE_PATH + '/' + lancamentoId;
    return this.httpClient.delete(url , this.httpUtilService.headers());
  }
}
