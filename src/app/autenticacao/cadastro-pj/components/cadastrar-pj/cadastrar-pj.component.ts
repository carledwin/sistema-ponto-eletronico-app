import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {CadastroPj} from '../../models';
import { CpfValidator,
          CnpjValidator } from './../../../../shared/validators';
import { CadastroPjService } from './../../services';

@Component({
  selector: 'app-cadastrar-pj',
  templateUrl: './cadastrar-pj.component.html',
  styleUrls: ['./cadastrar-pj.component.css']
})
export class CadastrarPjComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private matSnackBar: MatSnackBar,
              private router: Router,
              private cadastroPjService: CadastroPjService) { }

  ngOnInit() {
    this.gerarForm();
  }

  gerarForm(){
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
	    email: ['', [Validators.required, Validators.email]],
    	senha: ['', [Validators.required, Validators.minLength(6)]],
	    cpf: ['', [Validators.required, CpfValidator]],
      razaoSocial: ['', [Validators.required, Validators.minLength(5)]],
	    cnpj: ['', [Validators.required, CnpjValidator]]
    });
  }

  cadastrarPj(){

    if(this.form.invalid){
      console.log('Form invalido');
      return;
    }

    const cadastroPj: CadastroPj = this.form.value;

    this.cadastroPjService.cadastrar(cadastroPj).subscribe(
      data => {
        console.log(JSON.stringify(data));
        const msg: string = 'Realize o login para acessar o sistema';
        this.matSnackBar.open(msg, "Sucesso", {duration: 5000});
        this.router.navigate(['/login']);
      },
      err => {
        console.error(JSON.stringify(err));
        let msg: string = 'Tente novamente em instantes';
        if(err.status == 400){
          msg = err.error.errors.join(' ');
        }

        this.matSnackBar.open(msg, "Erro", {duration: 5000});
      }
      );

      console.log('Form invalido');
      console.log(JSON.stringify(this.form.value));
      console.log(JSON.stringify(cadastroPj));

      return false;
  }

}
