import { Component, OnInit } from '@angular/core';

import { LoginService } from 'src/app/services/login.service';
import { ActivatedRoute, Router } from '@angular/router';

import { DadosPessoais } from 'src/app/models/dados-pessoais.model';
import { ValidadorDadosPessoais } from 'src/app/validador/validador-dados-pessoais';


@Component({
  selector: 'app-formulario-cadastro.component',
  templateUrl: './formulario-cadastro.component.html',
  styleUrls: ['./formulario-cadastro.component.css']
})
export class FormularioCadastroComponent implements OnInit {

  mostrarFormularioCadastro1: boolean = true;
  mostrarFormularioCadastro2: boolean = false;

  validouFormularioCadastro1: boolean = false;
  validouFormularioCadastro2: boolean = false;

  estadoCivil: number = 1;

  dadosPessoais: DadosPessoais = new DadosPessoais();
  validadorDadosPessoais: ValidadorDadosPessoais;

  constructor(private loginService: LoginService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.mostrarFormularioCadastro1 = true;
    this.mostrarFormularioCadastro2 = false;
    this.validouFormularioCadastro1 = false;
    this.validouFormularioCadastro2 = false;
    this.estadoCivil = 1;

    this.dadosPessoais.cpf = this.route.snapshot.paramMap.get('cpf');

    this.validadorDadosPessoais = new ValidadorDadosPessoais();
  }

  handleKeyUp(e: any){
    if(e.keyCode === 13){
       this.continuar1();
    }
  }

  continuar1(): void
  {
    this.validadorDadosPessoais = this.validadorDadosPessoais.validarDados(this.dadosPessoais);
    if(this.validadorDadosPessoais.validouDados)
    {
      this.validouFormularioCadastro1 = true;
      this.mostrarFormularioCadastro2 = true;
      //this.mostrarFormularioCadastro1 = false;
    }
  }

  continuar2(): void
  {
    this.mostrarFormularioCadastro1 = false;
    this.mostrarFormularioCadastro2 = false;
    this.validouFormularioCadastro2 = true;
  }

}
