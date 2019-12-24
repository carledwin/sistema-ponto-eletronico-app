import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-login-pf',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private matSnackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit() {
    this.gerarForm();
  }

  gerarForm(){
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  logar(){
    if(this.form.invalid){
      this.matSnackBar.open("Dados inválidos", "Erro", {duration: 5000});
      return;
    }
    alert(JSON.stringify(this.form.value));
  }

}
