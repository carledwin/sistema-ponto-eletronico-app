import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import { LoginService } from './../../services/login.service';

import {Login} from '../../models';

@Component({
  selector: 'app-login-pf',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private matSnackBar: MatSnackBar,
    private router: Router,
    private loginService: LoginService) { }

  ngOnInit() {
    this.gerarForm();
  }

  gerarForm(){
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  logar(){
    if(this.form.invalid){
      this.matSnackBar.open('Dados inválidos', 'Erro', {duration: 5000});
      return;
    }

    const login: Login = this.form.value;

    this.loginService.logar(login).subscribe(
      data => {
        console.log(JSON.stringify(data));
        localStorage['token'] = data['data']['token'];

        const usuarioData = JSON.parse(atob(data['data']['token'].split('.')[1]));

        console.log(JSON.stringify(usuarioData));

        if(usuarioData['role'] == 'ROLE_ADMIN'){

          alert('Deve redirecionar para a pagina de ADMIN');
          //this.router.navigate(['/admin']);
        } else{
          alert('Deve redirecionar para a pagina de FUNCIONARIO');
          //this.router.navigate(['/funcionario']);
        }
      },
      err => {
        console.log(JSON.stringify(err));

        let msg: string = 'Tente novamente em instantes';

        if(err['status'] == 401){
          msg = 'Email/Senha inválido(s).';
        }

        this.matSnackBar.open(msg, "Erro", {duration: 5000});
      }
    );

    alert(JSON.stringify(login));

    alert('Email: ' + login.email + ', Senha: '  + login.password);
  }

}
