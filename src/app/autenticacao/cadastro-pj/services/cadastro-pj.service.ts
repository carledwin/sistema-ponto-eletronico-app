import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { environment as env } from './../../../../environments/environment';
import { CadastroPj } from '../';


// @Injectable({
//   providedIn: 'root'
// })

@Injectable()
export class CadastroPjService {

  private readonly CADASTRAR_PJ_PATH = "cadastro-pj";

  constructor(private httpClient: HttpClient) { }

  cadastrar(cadastroPj: CadastroPj): Observable<any>{
    return this.httpClient.post(env.baseUrl + this.CADASTRAR_PJ_PATH, cadastroPj);
  }
}
