import { Component, OnInit } from '@angular/core';

import { LoginService } from 'src/app/services/login.service';
import { ActivatedRoute, Router } from '@angular/router';

import { DadosPessoais } from 'src/app/models/dados-pessoais.model';
import { ValidadorDadosPessoais } from 'src/app/validador/validador-dados-pessoais';
import { DadosImovel } from 'src/app/models/dados-imovel.model';
import { IntegranteFamiliar } from 'src/app/models/integrante-familiar.model'


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

  dadosPessoais: DadosPessoais = new DadosPessoais();
  validadorDadosPessoais: ValidadorDadosPessoais;

  dadosConjuge: DadosPessoais = new DadosPessoais();
  validadorDadosConjuge: ValidadorDadosPessoais;

  dadosImovel: DadosImovel = new DadosImovel();

  tabIndex = 0;

  integranteFamiliar: IntegranteFamiliar;
  integrantesFamiliar: IntegranteFamiliar[];
  valorRenda: number;

  constructor(private loginService: LoginService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.mostrarFormularioCadastro1 = true;
    this.mostrarFormularioCadastro2 = false;
    this.validouFormularioCadastro1 = false;
    this.validouFormularioCadastro2 = false;

    this.dadosPessoais.cpf = this.route.snapshot.paramMap.get('cpf');

    this.validadorDadosPessoais = new ValidadorDadosPessoais();
    this.validadorDadosConjuge = new ValidadorDadosPessoais();

    this.integranteFamiliar = new IntegranteFamiliar();
    this.integranteFamiliar.nome = 'Nome Teste Integrante';
    this.integranteFamiliar.nis = '91340254210834';
    this.integranteFamiliar.sexo = '1';
    this.integranteFamiliar.relacaoComTitular = '1';
    this.integranteFamiliar.dataNascimento = '28/01/1995';
    this.integranteFamiliar.valorRenda = 3000;


    //if(this.dadosConjuge == undefined)
    //{
      //this.dadosConjuge = new DadosPessoais();
    //}
  }

  handleKeyUp(e: any){
    if(e.keyCode === 13){
       this.continuar1();
    }
  }

  continuar1(): void
  {
    this.validouFormularioCadastro1 = true;
    this.tabIndex++;

    //this.validadorDadosPessoais = this.validadorDadosPessoais.validarDados(this.dadosPessoais);
    //if(this.validadorDadosPessoais.validouDados)
    //{
      //this.validouFormularioCadastro1 = true;
      //this.tabIndex = 1;
      //this.mostrarFormularioCadastro1 = false;
      //this.mostrarFormularioCadastro2 = true;
    //}
    //else
    //{
      //this.tabIndex = 0;
    //}
  }

  continuar(): void
  {
    this.tabIndex++;
  }

  voltar(): void
  {
    this.tabIndex--;
  }

  onTabChanged($event) {
    let clickedIndex = $event.index;

    //if(clickedIndex == 1)
    //{
      //this.continuar1();
    //}
  }

  getIdade(data)
  {
    var hoje = new Date();

    var dataStrings: string[] = [];
    dataStrings.push(data.substring(0,2));
    dataStrings.push(data.substring(2,4));
    dataStrings.push(data.substring(4,8))

    var nascimento = new Date(this.convertDateMMDDYYY(dataStrings));

    //Retorna a diferença entre hoje e a data de nascimento em anos.
    var ano = hoje.getFullYear() - nascimento.getFullYear();

    //Retorna a diferença de mês do mês de nascimento para o atual.
    var m = hoje.getMonth() - nascimento.getMonth();

    //Caso ainda não tenha ultrapassado o dia e o mês
    if (m < 0 || (m === 0 && hoje.getDate() < nascimento.getDate())) {
        ano--;
    }
    return ano;
 }

  convertDateMMDDYYY(datearray)
  {
    return datearray[1] + '-' + datearray[0] + '-' + datearray[2];
  }

  maior18(dadosPessoais: DadosPessoais) : boolean
  {
    if(dadosPessoais.dataNascimento == undefined || dadosPessoais.dataNascimento.length < 8)
    {
      return true;
    }
    if(this.getIdade(dadosPessoais.dataNascimento) >= 18)
        return true;
    else
      return false;
  }

  onCheckboxOcupacaoChange(event: any)
  {
    if (event.target.checked) {
      this.dadosPessoais.ocupacao.push(event.target.value);

      if(event.target.value == "10")
      {
        this.dadosPessoais.mostrarOutrosOcupacao = true;
      }
    } else {
      const index = this.dadosPessoais.ocupacao.findIndex(x => x === event.target.value);
      this.dadosPessoais.ocupacao.splice(index);

      if(event.target.value == "10")
      {
        this.dadosPessoais.mostrarOutrosOcupacao = false;
      }
    }

    this.validadorDadosPessoais.validarOcupacao(this.dadosPessoais);
  }

  onCheckboxOcupacaoConjugeChange(event: any)
  {
    if (event.target.checked) {
      this.dadosConjuge.ocupacao.push(event.target.value);

      if(event.target.value == "10")
      {
        this.dadosConjuge.mostrarOutrosOcupacao = true;
      }
    } else {
      const index = this.dadosConjuge.ocupacao.findIndex(x => x === event.target.value);
      this.dadosConjuge.ocupacao.splice(index);

      if(event.target.value == "10")
      {
        this.dadosConjuge.mostrarOutrosOcupacao = false;
      }
    }

    this.validadorDadosConjuge.validarOcupacao(this.dadosConjuge);
  }

  onCheckboxBeneficiosSociaisChange(event: any)
  {
    if (event.target.checked) {
      this.dadosPessoais.beneficiosSociais.push(event.target.value);

      if(event.target.value == "8")
      {
        this.dadosPessoais.mostrarOutrosBeneficiosSociais = true;
      }
    } else {
      const index = this.dadosPessoais.beneficiosSociais.findIndex(x => x === event.target.value);
      this.dadosPessoais.beneficiosSociais.splice(index);

      if(event.target.value == "8")
      {
        this.dadosPessoais.mostrarOutrosBeneficiosSociais = false;
      }
    }

    //this.validadorDadosPessoais.validarBeneficiosSociais(this.dadosPessoais);
  }

  onCheckboxBeneficiosSociaisConjugeChange(event: any)
  {
    if (event.target.checked) {
      this.dadosConjuge.beneficiosSociais.push(event.target.value);

      if(event.target.value == "8")
      {
        this.dadosConjuge.mostrarOutrosBeneficiosSociais = true;
      }
    } else {
      const index = this.dadosConjuge.beneficiosSociais.findIndex(x => x === event.target.value);
      this.dadosConjuge.beneficiosSociais.splice(index);

      if(event.target.value == "8")
      {
        this.dadosConjuge.mostrarOutrosBeneficiosSociais = false;
      }
    }

    //this.validadorDadosConjuge.validarBeneficiosSociais(this.dadosConjuge);
  }

  salvar(): void
  {

  }

  enviarDados(): void
  {

  }

  adicionarIntegrante(): void
  {

  }

  removerIntegrante(): void
  {

  }

}
