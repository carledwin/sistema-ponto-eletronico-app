import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {CadastroPf} from '../models';
import {environment as env} from '../../../../environments/environment';

@Injectable()
export class CadastrarPfService {

  private readonly CADASTRAR_PF_PATH: string = 'cadastro-pf';

  constructor(private httpClient: HttpClient) { }

  cadastrar(cadastroPf: CadastroPf): Observable<any>{
    return this.httpClient.post(env.baseUrl + this.CADASTRAR_PF_PATH, cadastroPf);
  }
}
