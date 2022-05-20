import { Component, OnInit } from '@angular/core';

import { LoginService } from 'src/app/services/login.service';
import { DadosPessoaisService } from 'src/app/services/dados-pessoais.service';
import { ActivatedRoute, Router } from '@angular/router';

import { DadosPessoais } from 'src/app/models/dados-pessoais.model';
import { ValidadorDadosPessoais } from 'src/app/validador/validador-dados-pessoais';
import { DadosImovel } from 'src/app/models/dados-imovel.model';
import { IntegranteFamiliar } from 'src/app/models/integrante-familiar.model'
import { CaracteristicasDomicilio } from 'src/app/models/caracteristicas-domicilio.model'


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

  integranteTitular: IntegranteFamiliar;
  integranteFamiliar: IntegranteFamiliar;
  integrantesFamiliar: IntegranteFamiliar[] = [];
  valorRendaTotal: number = 0.00;
  valorRendaTotalString: string = '0,00';

  caracteristicasDomicilio: CaracteristicasDomicilio = new CaracteristicasDomicilio();

  submitted = false;

  constructor(private dadosPessoaisService: DadosPessoaisService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    //this.mostrarFormularioCadastro1 = true;
    //this.mostrarFormularioCadastro2 = false;
    //this.validouFormularioCadastro1 = false;
    //this.validouFormularioCadastro2 = false;

    this.dadosPessoais.cpf = this.route.snapshot.paramMap.get('cpf');

    this.validadorDadosPessoais = new ValidadorDadosPessoais();
    this.validadorDadosConjuge = new ValidadorDadosPessoais();

    //this.integranteTitular = new IntegranteFamiliar();
    //this.integranteTitular.nome = 'Nome do Titular';
    //this.integranteTitular.documento = '91340254210834';
    //this.integranteTitular.sexo = 'Masculino';
    //this.integranteTitular.relacaoComTitular = 'Titular';
    //this.integranteTitular.dataNascimento = '28/01/1995';
    //this.integranteTitular.valorRenda = 0,00;

    //this.valorRendaTotal = this.integranteTitular.valorRenda;
    //this.valorRendaTotalString = this.valorRendaTotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    this.integranteFamiliar = new IntegranteFamiliar();


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
    window.scrollTo(0, 0);

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
    window.scrollTo(0, 0);
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

      if(event.target.value == 10)
      {
        this.dadosPessoais.mostrarOutrosOcupacao = true;
      }
    } else {
      const index = this.dadosPessoais.ocupacao.findIndex(x => x === event.target.value);
      this.dadosPessoais.ocupacao.splice(index, 1);

      if(event.target.value == 10)
      {
        this.dadosPessoais.mostrarOutrosOcupacao = false;
      }
    }

    this.validadorDadosPessoais.validarOcupacoes(this.dadosPessoais);
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
      this.dadosConjuge.ocupacao.splice(index, 1);

      if(event.target.value == "10")
      {
        this.dadosConjuge.mostrarOutrosOcupacao = false;
      }
    }

    this.validadorDadosConjuge.validarOcupacoes(this.dadosConjuge);
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
      this.dadosPessoais.beneficiosSociais.splice(index, 1);

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
      this.dadosConjuge.beneficiosSociais.splice(index, 1);

      if(event.target.value == "8")
      {
        this.dadosConjuge.mostrarOutrosBeneficiosSociais = false;
      }
    }

    //this.validadorDadosConjuge.validarBeneficiosSociais(this.dadosConjuge);
  }

  salvar(): void
  {
    this.dadosPessoais.dadosImovel = this.dadosImovel;

    this.dadosPessoaisService.create(this.dadosPessoais).subscribe
    (
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      }
    );
  }

  enviarDados(): void
  {

  }

  adicionarRendaTitularOuConjuge(): void
  {
    this.valorRendaTotal = 0;
    var soma = 0;

    this.integrantesFamiliar.forEach(function (integrante)
    {
      if(integrante.valorRenda != undefined)
      {
        soma += integrante.valorRenda;
      }
    });

    this.valorRendaTotal = soma;
    if(this.dadosPessoais.valorRenda != undefined)
    {
      this.valorRendaTotal += this.dadosPessoais.valorRenda;
    }

    if(this.dadosConjuge.valorRenda != undefined)
    {
      this.valorRendaTotal += this.dadosConjuge.valorRenda;
    }

    this.valorRendaTotalString = this.valorRendaTotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  }

  adicionarIntegrante(): void
  {
    if(this.integranteFamiliar.nome != undefined && this.integranteFamiliar.nome != '' &&
      this.integranteFamiliar.relacaoComTitular != undefined && this.integranteFamiliar.relacaoComTitular != 'Selecione'
      && this.integranteFamiliar.documento != undefined && this.integranteFamiliar.documento != '' &&
      this.integranteFamiliar.sexo != undefined && this.integranteFamiliar.sexo != '' &&
      this.integranteFamiliar.dataNascimento != undefined && this.integranteFamiliar.dataNascimento != '')
    {
      if(this.integranteFamiliar.valorRenda != undefined && this.integranteFamiliar.valorRenda > 0)
      {
        this.valorRendaTotal += this.integranteFamiliar.valorRenda;
      }
      else
      {
        this.integranteFamiliar.valorRenda = 0.00;
      }
      this.integranteFamiliar.valorRendaString = this.integranteFamiliar.valorRenda.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

      this.valorRendaTotalString = this.valorRendaTotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

      this.integrantesFamiliar.push(this.integranteFamiliar);

      this.integranteFamiliar = new IntegranteFamiliar();
    }
  }

  removerIntegrante(integrante): void
  {
    const index = this.integrantesFamiliar.indexOf(integrante);
    this.integrantesFamiliar.splice(index, 1);

    if(integrante.valorRenda != undefined && integrante.valorRenda > 0)
    {
      this.valorRendaTotal -= integrante.valorRenda;
    }
    this.valorRendaTotalString = this.valorRendaTotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  }

  onCheckboxMaterialParedeChange(event: any)
  {
    if (event.target.checked) {
      this.caracteristicasDomicilio.materialParedeExterna.push(event.target.value);

      if(event.target.value == "5")
      {
        this.caracteristicasDomicilio.mostrarOutrosMaterialParedeExterna = true;
      }
    } else {
      const index = this.caracteristicasDomicilio.materialParedeExterna.findIndex(x => x === event.target.value);
      this.caracteristicasDomicilio.materialParedeExterna.splice(index, 1);

      if(event.target.value == "5")
      {
        this.caracteristicasDomicilio.mostrarOutrosMaterialParedeExterna = false;
      }
    }

    //this.validadorDadosPessoais.validarOcupacoes(this.caracteristicasDomicilio);
  }

  onCheckboxMaterialPisoChange(event: any)
  {
    if (event.target.checked) {
      this.caracteristicasDomicilio.materialPiso.push(event.target.value);

      if(event.target.value == "6")
      {
        this.caracteristicasDomicilio.mostrarOutrosMaterialPiso = true;
      }
    } else {
      const index = this.caracteristicasDomicilio.materialPiso.findIndex(x => x === event.target.value);
      this.caracteristicasDomicilio.materialPiso.splice(index, 1);

      if(event.target.value == "6")
      {
        this.caracteristicasDomicilio.mostrarOutrosMaterialPiso = false;
      }
    }

    //this.validadorDadosPessoais.validarOcupacoes(this.caracteristicasDomicilio);
  }

  onCheckboxMaterialInstalacaoEletricaChange(event: any)
  {
    if (event.target.checked) {
      this.caracteristicasDomicilio.materialInstalacaoEletrica.push(event.target.value);

      if(event.target.value == "8")
      {
        this.caracteristicasDomicilio.mostrarOutrosMaterialInstalacaoEletrica = true;
      }
    } else {
      const index = this.caracteristicasDomicilio.materialInstalacaoEletrica.findIndex(x => x === event.target.value);
      this.caracteristicasDomicilio.materialInstalacaoEletrica.splice(index, 1);

      if(event.target.value == "8")
      {
        this.caracteristicasDomicilio.mostrarOutrosMaterialInstalacaoEletrica = false;
      }
    }

    //this.validadorDadosPessoais.validarOcupacoes(this.caracteristicasDomicilio);
  }

  onCheckboxMaterialEsgotoSanitarioChange(event: any)
  {
    if (event.target.checked) {
      this.caracteristicasDomicilio.esgotoSanitario.push(event.target.value);

      if(event.target.value == "6")
      {
        this.caracteristicasDomicilio.mostrarOutrosEsgotoSanitario = true;
      }
    } else {
      const index = this.caracteristicasDomicilio.esgotoSanitario.findIndex(x => x === event.target.value);
      this.caracteristicasDomicilio.esgotoSanitario.splice(index, 1);

      if(event.target.value == "6")
      {
        this.caracteristicasDomicilio.mostrarOutrosEsgotoSanitario = false;
      }
    }

    //this.validadorDadosPessoais.validarOcupacoes(this.caracteristicasDomicilio);
  }

}
