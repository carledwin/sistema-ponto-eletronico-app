import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {HttpUtilService} from '../../shared';

@Injectable()
export class AdminGuard implements CanActivate{

  constructor(private httpUtilService: HttpUtilService,
              private router: Router) {}

  canActivate(): boolean {
    const perfil: string = this.httpUtilService.obterPerfil();
    if(perfil  === 'ROLE_ADMIN'){
      console.info('O usuário tem perfil -> ' + perfil);
      console.info('O usuário será redirecionado para área ADMIN');
      return true;
    }

    console.info('O usuário tem perfil -> ' + perfil);
    console.info('O usuário será redirecionado para área FUNC');
    this.router.navigate(['/funcionario']);
    return false;
  }
}
