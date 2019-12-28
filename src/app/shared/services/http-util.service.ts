import { Injectable } from '@angular/core';
import { HttpHeaders} from '@angular/common/http';

@Injectable()
export class HttpUtilService {

  constructor() { }

  headers() {

  	if (localStorage['token']) {

      const bearerToken = 'Bearer ' + localStorage['token'];
      const contentType = 'application/json';
      const accept = 'application/json';

      let httpHeaders: HttpHeaders = new HttpHeaders();

      httpHeaders = httpHeaders.set('Accept', accept);
      httpHeaders = httpHeaders.set('Batata', 'Frita');
      httpHeaders = httpHeaders.set('Content-Type', contentType);
      httpHeaders = httpHeaders.set('Authorization', bearerToken);

      console.info('TesteHeader: ' + httpHeaders.get('TesteHeader'));
      console.info('Authorization: ' + httpHeaders.get('Authorization'));
      console.info('Content-Type: ' + httpHeaders.get('Content-Type'));
      console.info('Accept: ' + httpHeaders.get('Accept'));

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

  obterIdEmpresa(): string{

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
}
