import { Injectable } from '@angular/core';
import { HttpHeaders} from '@angular/common/http';

@Injectable()
export class HttpUtilService {

  constructor() { }

  headers() {
    if (localStorage['token']) {

      const bearerToken = 'Bearer ' + localStorage['token'];
      let httpHeaders: HttpHeaders = new HttpHeaders();
      httpHeaders = httpHeaders.set('Authorization', bearerToken);

      return { headers: httpHeaders };
    }

    return null;
  }

  obterIdUsuario(): string{

    if(!localStorage['token']){
      return '';
    }

    const dadosUsuario = this.obterDadosUsuario();
    return dadosUsuario ? dadosUsuario.id : '';
  }

  obterIdEmpresa(): string {

    if(!localStorage['token']){
      return '';
    }

    const dadosUsuario = this.obterDadosUsuario();
    return dadosUsuario ? dadosUsuario.empresaId : '';
  }

  obterDadosUsuario(){

    if(!localStorage['token']){
      return '';
    }

    return JSON.parse(atob(localStorage['token'].split('.')[1]));
  }

  obterPerfil(): string {

    if(!localStorage['token']){
      return '';
    }
    const dadosUsuario = this.obterDadosUsuario();
    return dadosUsuario ? dadosUsuario.role : '';
  }
}
