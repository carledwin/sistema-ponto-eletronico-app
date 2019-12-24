import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent, LogarComponent} from './components';

export const LoginRoutes: Routes = [
  {
    path: 'login', //path relativo
    component: LogarComponent,
    children: [{
      path: '', component: LoginComponent
    }]
  }
]

@NgModule({
  imports: [RouterModule.forChild(LoginRoutes)],
  exports: [RouterModule]
})
//varias rotas filhas para somente uma rota pai

export class LoginRoutingModule {
}
