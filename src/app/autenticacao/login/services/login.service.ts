import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';//busca/requisicao de forma ascincrona
import {HttpClient} from '@angular/common/http';
import {environment as env} from '../../../../environments/environment';
import {Login} from '../';

/* @Injectable({
  providedIn: 'root'
}) */
@Injectable()
export class LoginService {

  private readonly PATH_AUTH: string = 'auth';

  constructor(private httpClient: HttpClient) { }

  logar(login: Login): Observable<any>{
    return this.httpClient.post(env.baseUrl + this.PATH_AUTH, login);
  }
}
