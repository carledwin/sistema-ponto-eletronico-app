import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {environment as env} from '../../../../environments/environment';
import {CadastroPf} from '../models';

@Injectable()
export class CadastrarPfService {

  private readonly CADASTRAR_PF_PATH: string = 'cadastro-pf';

  constructor(private httpClient: HttpClient) { }

  cadastrar(cadastroPf: CadastroPf): Observable<any>{
    return this.httpClient.post(env.baseUrl + this.CADASTRAR_PF_PATH, cadastroPf);
  }
}
