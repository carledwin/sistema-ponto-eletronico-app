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
  // private readonly LANCAMENTOS_BY_FUNCIONARIO_ID_PATH: string = '/funcionarios/{funcionarioId}';
  // private readonly LANCAMENTOS_TODOS_BY_FUNCIONARIO_ID_PATH: string = '/funcionarios/{funcionarioId}/todos';

  constructor(private httpClient: HttpClient,
              private httpUtilService: HttpUtilService) { }


  buscarUltimoTipoLancado(): Observable<any>{


    const token: string = localStorage['token'];
    console.log('Token >>>> ' + token);

    const bearerToken: string = "Bearer " + token;
    console.log('BearerToken >>>> ' + bearerToken);

    const headers = new HttpHeaders().set("Authorization", bearerToken);
    console.log('Header >>>> ' + JSON.stringify(headers));

    const url = env.baseUrl +
                this.LANCAMENTOS_BASE_PATH +
                this.ULTIMO_LANCAMENTO_PATH.replace('{funcionarioId}', this.httpUtilService.obterIdUsuario());

    console.log('Url >>>>> ' + url);

    return this.httpClient.get(url, this.httpUtilService.headers());


    //return this.httpClient.get(url, {headers: headers});
  }

  cadastrar(lancamento: Lancamento): Observable<any>{

    return this.httpClient.post(env.baseUrl + this.LANCAMENTOS_BASE_PATH,
      lancamento,
      this.httpUtilService.headers());
  }
}
