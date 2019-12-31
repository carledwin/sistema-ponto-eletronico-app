import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {environment as env} from '../../../environments/environment';
import {Lancamento} from '../models';
import {HttpUtilService} from './http-util.service';

@Injectable()
export class FuncionarioService {

  private readonly FUNCIONARIOS_BASE_PATH = 'funcionarios';
  private readonly EMPRESA_BY_ID = '/empresa/{empresaId}';

  constructor(private httpClient: HttpClient,
              private httpUtilService: HttpUtilService) { }

  listarFuncionariosPorEmpresa(): Observable<any>{

    const url = env.baseUrl + this.FUNCIONARIOS_BASE_PATH + this.EMPRESA_BY_ID.replace('{empresaId}', this.httpUtilService.obterIdEmpresa());

    return this.httpClient.get(url, this.httpUtilService.headers());
  }
}
