import { Component, OnInit, TemplateRef, ElementRef, ViewChild } from '@angular/core';
import { Location } from '@angular/common';

import { DadosPessoaisService } from 'src/app/services/dados-pessoais.service';
import { ActivatedRoute, Router } from '@angular/router';

import { DadosPessoais } from 'src/app/models/dados-pessoais.model';
import { ValidadorDadosPessoais } from 'src/app/validador/validador-dados-pessoais';
import { ValidadorDadosConjuge } from 'src/app/validador/validador-dados-conjuge';
import { ValidadorIdentificacaoImovel } from 'src/app/validador/validador-identificacao-imovel';
import { ValidadorIntegranteFamiliar } from 'src/app/validador/validador-integrante-familiar';
import { ValidadorCaracteristicasDomicilio } from 'src/app/validador/validador-caracteristicas-domicilio';
import { DadosImovel } from 'src/app/models/dados-imovel.model';
import { IntegranteFamiliar } from 'src/app/models/integrante-familiar.model';
import { CaracteristicasDomicilio } from 'src/app/models/caracteristicas-domicilio.model';

import { AlertModalService } from 'src/app/services/alert-modal.service';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';


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
  validadorDadosConjuge: ValidadorDadosConjuge;

  dadosImovel: DadosImovel = new DadosImovel();
  validadorIdentificacaoImovel: ValidadorIdentificacaoImovel;

  caracteristicasDomicilio: CaracteristicasDomicilio = new CaracteristicasDomicilio();
  validadorCaracteristicasDomicilio: ValidadorCaracteristicasDomicilio

  tabIndex = 0;

  integranteTitular: IntegranteFamiliar;
  integranteFamiliar: IntegranteFamiliar;
  integrantesFamiliar: IntegranteFamiliar[] = [];
  validadorIntegranteFamiliar: ValidadorIntegranteFamiliar;
  valorRendaTotal: number = 0.00;
  valorRendaTotalString: string = '0,00';

  comprovanteRenda: File;

  //nomeArquivos: string = ''

  submitted = false;

  bsModalRef: BsModalRef;
  @ViewChild('modalTemplate') mymodal: ElementRef;

  mensagemValidacaoDadosPessoais: string = '';
  mensagemValidacaoDadosConjuge: string = '';
  mensagemValidacaoIdentificacaoImovel: string = '';
  mensagemValidacaoAdicaoIntegranteFamiliar: string = '';
  mensagemValidacaoCaracteristicasDomicilio: string = '';

  constructor(private dadosPessoaisService: DadosPessoaisService, private route: ActivatedRoute,
    private location: Location,
    private alertModalService: AlertModalService,
    private modalService: BsModalService) {

  }

  ngOnInit(): void {
    //this.mostrarFormularioCadastro1 = true;
    //this.mostrarFormularioCadastro2 = false;
    //this.validouFormularioCadastro1 = false;
    //this.validouFormularioCadastro2 = false;

    //this.dadosPessoais.cpf = this.route.snapshot.paramMap.get('cpf');

    this.validadorDadosPessoais = new ValidadorDadosPessoais();
    this.validadorDadosConjuge = new ValidadorDadosConjuge();
    this.validadorIdentificacaoImovel = new ValidadorIdentificacaoImovel();
    this.validadorIntegranteFamiliar = new ValidadorIntegranteFamiliar();
    this.validadorCaracteristicasDomicilio = new ValidadorCaracteristicasDomicilio();

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

  openModal() {
    this.bsModalRef = this.modalService.show(this.mymodal, { class: 'modal-lg' });
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
      this.dadosPessoais.ocupacaoArray.push(event.target.value);

      if(event.target.value == 10)
      {
        this.dadosPessoais.mostrarOutrosOcupacao = true;
      }
    } else {
      const index = this.dadosPessoais.ocupacaoArray.findIndex(x => x === event.target.value);
      this.dadosPessoais.ocupacaoArray.splice(index, 1);

      if(event.target.value == 10)
      {
        this.dadosPessoais.mostrarOutrosOcupacao = false;
        this.dadosPessoais.ocupacaoTexto='';
      }
    }

  }

  onCheckboxOcupacaoConjugeChange(event: any)
  {
    if (event.target.checked) {
      this.dadosConjuge.ocupacaoArray.push(event.target.value);

      if(event.target.value == "10")
      {
        this.dadosConjuge.mostrarOutrosOcupacao = true;
      }
    } else {
      const index = this.dadosConjuge.ocupacaoArray.findIndex(x => x === event.target.value);
      this.dadosConjuge.ocupacaoArray.splice(index, 1);

      if(event.target.value == "10")
      {
        this.dadosConjuge.mostrarOutrosOcupacao = false;
        this.dadosConjuge.ocupacaoTexto='';
      }
    }

  }

  onCheckboxBeneficiosSociaisChange(event: any)
  {
    if (event.target.checked) {
      this.dadosPessoais.beneficiosSociaisArray.push(event.target.value);

      if(event.target.value == "8")
      {
        this.dadosPessoais.mostrarOutrosBeneficiosSociais = true;
      }
    } else {
      const index = this.dadosPessoais.beneficiosSociaisArray.findIndex(x => x === event.target.value);
      this.dadosPessoais.beneficiosSociaisArray.splice(index, 1);

      if(event.target.value == "8")
      {
        this.dadosPessoais.mostrarOutrosBeneficiosSociais = false;
        this.dadosPessoais.beneficiosSociaisTexto='';
      }
    }

  }

  onCheckboxBeneficiosSociaisConjugeChange(event: any)
  {
    if (event.target.checked) {
      this.dadosConjuge.beneficiosSociaisArray.push(event.target.value);

      if(event.target.value == "8")
      {
        this.dadosConjuge.mostrarOutrosBeneficiosSociais = true;
      }
    } else {
      const index = this.dadosConjuge.beneficiosSociaisArray.findIndex(x => x === event.target.value);
      this.dadosConjuge.beneficiosSociaisArray.splice(index, 1);

      if(event.target.value == "8")
      {
        this.dadosConjuge.mostrarOutrosBeneficiosSociais = false;
        this.dadosConjuge.beneficiosSociaisTexto='';
      }
    }

  }

  salvar(ehEnviar: boolean): void
  {
    this.mensagemValidacaoDadosConjuge = '';
    this.mensagemValidacaoIdentificacaoImovel = '';
    this.mensagemValidacaoAdicaoIntegranteFamiliar = '';
    this.mensagemValidacaoCaracteristicasDomicilio = '';

    if(!this.validadorDadosPessoais.validarCpf(this.dadosPessoais))
    {
      this.mensagemValidacaoDadosPessoais = 'CPF';
      this.tabIndex = 0;
      window.scrollTo(0, 0);
      //this.alertModalService.showAlertDanger('Preencha o campo CPF');
      this.openModal();
      return;
    }

    this.corrigirDadosPessoais();
    this.corrigirDadosConjuge();
    this.corrigirDadosCaracteristicasDomicilio();
    this.corrigirDadosImovel();

    this.dadosPessoais.dadosImovel = this.dadosImovel;
    this.dadosPessoais.dadosConjuge = this.dadosConjuge;
    this.dadosPessoais.listaIntegranteImovel = this.integrantesFamiliar;
    this.dadosPessoais.caracteristicasDomicilio = this.caracteristicasDomicilio;

    if(this.dadosPessoais.situacaoCadastro == undefined || this.dadosPessoais.situacaoCadastro == 0)
    {
      this.dadosPessoais.situacaoCadastro = 1;
    }

    this.dadosPessoaisService.create(this.dadosPessoais).subscribe
    (
      response => {
        console.log(response);

        this.dadosPessoais.id = response.id;

        var file: File;

        for (var i = 0; i < this.dadosPessoais.arquivosSelecionados.length; i++)
        {
          // obtém o item
          file = this.dadosPessoais.arquivosSelecionados[i];

          this.uploadArquivoPessoal(file, response.id);
        }

        for (var i = 0; i < this.dadosImovel.anexoFotos.length; i++)
        {
          // obtém o item
          file = this.dadosImovel.anexoFotos[i];

          this.uploadFotoImovel(file, response.id);
        }

        if(this.comprovanteRenda != undefined)
        {
          this.uploadComprovanteRenda(this.comprovanteRenda, response.id);
        }

        //this.dadosPessoais = response;
        this.integrantesFamiliar = response.listaIntegranteImovel;
        this.adicionarRendaTitularOuConjuge();

        this.submitted = true;

        if(!ehEnviar)
        {
          this.alertModalService.showAlertSuccess('Dados salvos com sucesso!');
        }
        else
        {
          this.alertModalService.showAlertSuccess('Dados enviados com sucesso!');
          location.reload();
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  corrigirDadosPessoais(): void
  {
    if(this.dadosPessoais.beneficiosSociaisArray != [])
    {
      var beneficio = '';

      this.dadosPessoais.beneficiosSociaisArray.forEach(function (caracteristica)
      {
        if(beneficio == undefined || beneficio == '')
        {
          beneficio = '' + caracteristica;
        }
        else
        {
          beneficio += ', ' + caracteristica;
        }
      });

      this.dadosPessoais.beneficiosSociais = '' + beneficio;
    }

    if(this.dadosPessoais.ocupacaoArray != [])
    {
      var ocupacao = '';

      this.dadosPessoais.ocupacaoArray.forEach(function (caracteristica)
      {
        if(ocupacao == undefined || ocupacao == '')
        {
          ocupacao = '' + caracteristica;
        }
        else
        {
          ocupacao += ', ' + caracteristica;
        }
      });

      this.dadosPessoais.ocupacao = '' + ocupacao;
    }
  }

  corrigirDadosConjuge(): void
  {
    if(this.dadosConjuge.beneficiosSociaisArray != [])
    {
      var beneficio = '';

      this.dadosConjuge.beneficiosSociaisArray.forEach(function (caracteristica)
      {
        if(beneficio == undefined || beneficio == '')
        {
          beneficio = '' + caracteristica;
        }
        else
        {
          beneficio += ', ' + caracteristica;
        }
      });

      this.dadosConjuge.beneficiosSociais = '' + beneficio;
    }

    if(this.dadosConjuge.ocupacaoArray != [])
    {
      var ocupacao = '';

      this.dadosConjuge.ocupacaoArray.forEach(function (caracteristica)
      {
        if(ocupacao == undefined || ocupacao == '')
        {
          ocupacao = '' + caracteristica;
        }
        else
        {
          ocupacao += ', ' + caracteristica;
        }
      });

      this.dadosConjuge.ocupacao = '' + ocupacao;
    }
  }

  corrigirDadosCaracteristicasDomicilio(): void
  {
    if(this.caracteristicasDomicilio.materialParedeExternaArray != [])
    {
      var material = '';

      this.caracteristicasDomicilio.materialParedeExternaArray.forEach(function (caracteristica)
      {
        if(material == undefined || material == '')
        {
          material = '' + caracteristica;
        }
        else
        {
          material += ', ' + caracteristica;
        }
      });

      this.dadosPessoais.caracteristicasDomicilio.materialParedeExterna = '' + material;
    }

    if(this.caracteristicasDomicilio.materialPisoArray != [])
    {
      var material = '';

      this.caracteristicasDomicilio.materialPisoArray.forEach(function (caracteristica)
      {
        if(material == undefined || material == '')
        {
          material = '' + caracteristica;
        }
        else
        {
          material += ', ' + caracteristica;
        }
      });

      this.dadosPessoais.caracteristicasDomicilio.materialPiso = '' + material;
    }

    if(this.caracteristicasDomicilio.materialInstalacaoEletricaArray != [])
    {
      var material = '';

      this.caracteristicasDomicilio.materialInstalacaoEletricaArray.forEach(function (caracteristica)
      {
        if(material == undefined || material == '')
        {
          material = '' + caracteristica;
        }
        else
        {
          material += ', ' + caracteristica;
        }
      });

      this.dadosPessoais.caracteristicasDomicilio.materialInstalacaoEletrica = '' + material;
    }

    if(this.caracteristicasDomicilio.esgotoSanitarioArray != [])
    {
      var material = '';

      this.caracteristicasDomicilio.esgotoSanitarioArray.forEach(function (caracteristica)
      {
        if(material == undefined || material == '')
        {
          material = '' + caracteristica;
        }
        else
        {
          material += ', ' + caracteristica;
        }
      });

      this.dadosPessoais.caracteristicasDomicilio.esgotoSanitario = '' + material;
    }


  }

  corrigirDadosImovel(): void
  {
    if(this.dadosImovel.mais1DomicilioLote == undefined || this.dadosImovel.mais1DomicilioLote == "0")
    {
      this.dadosImovel.quantidadeDomiciliosLote = undefined;
    }
  }

  enviarDados(): void
  {
    var retornar = undefined;
    this.mensagemValidacaoDadosPessoais = '';
    this.mensagemValidacaoDadosConjuge = '';
    this.mensagemValidacaoIdentificacaoImovel = '';
    this.mensagemValidacaoAdicaoIntegranteFamiliar = '';
    this.mensagemValidacaoCaracteristicasDomicilio = '';

    // Validar Caracteristicas Domicilio:
    this.validadorCaracteristicasDomicilio.validarDados(this.caracteristicasDomicilio);
    if(!this.validadorCaracteristicasDomicilio.validouDados)
    {
      this.mensagemValidacaoCaracteristicasDomicilio = this.validadorCaracteristicasDomicilio.camposInvalidos;
      retornar = 3;

      if(this.dadosPessoais.estadoCivil != undefined && (this.dadosPessoais.estadoCivil == 2 || this.dadosPessoais.estadoCivil == 6))
      {
        retornar++;
      }
    }
    //

    // Validar Identificação Imóvel:
    this.validadorIdentificacaoImovel.validarDados(this.dadosImovel);
    if(!this.validadorIdentificacaoImovel.validouDados)
    {
      this.mensagemValidacaoIdentificacaoImovel = this.validadorIdentificacaoImovel.camposInvalidos;
      retornar = 1;

      if(this.dadosPessoais.estadoCivil != undefined && (this.dadosPessoais.estadoCivil == 2 || this.dadosPessoais.estadoCivil == 6))
      {
        retornar++;
      }
    }
    //

    // Validar Dados Conjuge:
    if(this.dadosPessoais.estadoCivil != undefined && (this.dadosPessoais.estadoCivil == 2 || this.dadosPessoais.estadoCivil == 6))
    {
      this.validadorDadosConjuge.validarDados(this.dadosConjuge);
      if(!this.validadorDadosConjuge.validouDados)
      {
        this.mensagemValidacaoDadosConjuge = this.validadorDadosConjuge.camposInvalidos;
        retornar = 1;
      }
    }
    //

    // Validar Dados Pessoais:
    this.validadorDadosPessoais.validarDados(this.dadosPessoais);
    if(!this.validadorDadosPessoais.validouDados)
    {
      this.mensagemValidacaoDadosPessoais = this.validadorDadosPessoais.camposInvalidos;
      retornar = 0;
    }
    //

    if(retornar != undefined)
    {
      this.tabIndex = retornar;
      this.openModal();
      window.scrollTo(0, 0);
      return;
    }

    this.dadosPessoais.situacaoCadastro = 2;
    this.salvar(true);
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
        integrante.valorRendaString = integrante.valorRenda.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
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
    // Validar Adição Integrante Familiar:
    this.mensagemValidacaoDadosPessoais = '';
    this.mensagemValidacaoAdicaoIntegranteFamiliar = '';
    this.validadorIntegranteFamiliar.validarDados(this.integranteFamiliar);
    if(!this.validadorIntegranteFamiliar.validouDados)
    {
      this.mensagemValidacaoAdicaoIntegranteFamiliar = this.validadorIntegranteFamiliar.camposInvalidos;
      this.openModal();
    }
    //
    else
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
      this.caracteristicasDomicilio.materialParedeExternaArray.push(event.target.value);

      if(event.target.value == "5")
      {
        this.caracteristicasDomicilio.mostrarOutrosMaterialParedeExterna = true;
      }
    } else {
      const index = this.caracteristicasDomicilio.materialParedeExternaArray.findIndex(x => x === event.target.value);
      this.caracteristicasDomicilio.materialParedeExternaArray.splice(index, 1);

      if(event.target.value == "5")
      {
        this.caracteristicasDomicilio.mostrarOutrosMaterialParedeExterna = false;
        this.caracteristicasDomicilio.materialParedeExternaTexto = undefined;
      }
    }

    //this.validadorDadosPessoais.validarOcupacoes(this.caracteristicasDomicilio);
  }

  onCheckboxMaterialPisoChange(event: any)
  {
    if (event.target.checked) {
      this.caracteristicasDomicilio.materialPisoArray.push(event.target.value);

      if(event.target.value == "6")
      {
        this.caracteristicasDomicilio.mostrarOutrosMaterialPiso = true;
      }
    } else {
      const index = this.caracteristicasDomicilio.materialPisoArray.findIndex(x => x === event.target.value);
      this.caracteristicasDomicilio.materialPisoArray.splice(index, 1);

      if(event.target.value == "6")
      {
        this.caracteristicasDomicilio.mostrarOutrosMaterialPiso = false;
        this.caracteristicasDomicilio.materialPisoTexto = undefined;
      }
    }

    //this.validadorDadosPessoais.validarOcupacoes(this.caracteristicasDomicilio);
  }

  onCheckboxMaterialInstalacaoEletricaChange(event: any)
  {
    if (event.target.checked) {
      this.caracteristicasDomicilio.materialInstalacaoEletricaArray.push(event.target.value);

      if(event.target.value == "8")
      {
        this.caracteristicasDomicilio.mostrarOutrosMaterialInstalacaoEletrica = true;
      }
    } else {
      const index = this.caracteristicasDomicilio.materialInstalacaoEletricaArray.findIndex(x => x === event.target.value);
      this.caracteristicasDomicilio.materialInstalacaoEletricaArray.splice(index, 1);

      if(event.target.value == "8")
      {
        this.caracteristicasDomicilio.mostrarOutrosMaterialInstalacaoEletrica = false;
        this.caracteristicasDomicilio.materialInstalacaoEletricaTexto = undefined;
      }
    }

    //this.validadorDadosPessoais.validarOcupacoes(this.caracteristicasDomicilio);
  }

  onCheckboxMaterialEsgotoSanitarioChange(event: any)
  {
    if (event.target.checked) {
      this.caracteristicasDomicilio.esgotoSanitarioArray.push(event.target.value);

      if(event.target.value == "6")
      {
        this.caracteristicasDomicilio.mostrarOutrosEsgotoSanitario = true;
      }
    } else {
      const index = this.caracteristicasDomicilio.esgotoSanitarioArray.findIndex(x => x === event.target.value);
      this.caracteristicasDomicilio.esgotoSanitarioArray.splice(index, 1);

      if(event.target.value == "6")
      {
        this.caracteristicasDomicilio.mostrarOutrosEsgotoSanitario = false;
        this.caracteristicasDomicilio.esgotoSanitarioTexto = undefined;
      }
    }

    //this.validadorDadosPessoais.validarOcupacoes(this.caracteristicasDomicilio);
  }

  onChangeArquivo(event)
  {
    console.log(event);

    var selectedFiles = event.srcElement.files;

    //validar quantidade carregada ao mesmo tempo
    if(selectedFiles.length > 3)
    {
      alert("Escolha no máximo 3 arquivos")
      return;
    }
    //

    //validar quantidade carregada ao todo:
    if(this.dadosPessoais.arquivosSelecionados == undefined || this.dadosPessoais.arquivosSelecionados.length == 0)
    {
      //this.dadosPessoais.arquivosSelecionados = selectedFiles;
    }
    else
    {
      if(this.dadosPessoais.arquivosSelecionados.length >= 3 || (selectedFiles.length + this.dadosPessoais.arquivosSelecionados.length > 3))
      {
        alert("Escolha no máximo 3 arquivos")
        return;
      }
    }
    //

    // Adicionar item no array e Setar nome dos arquivos na label
    var file;
    for (var i = 0; i < selectedFiles.length; i++)
    {
      // obtém o item
      file = selectedFiles.item(i);
      this.dadosPessoais.arquivosSelecionados.push(file);

      //if(this.nomeArquivos == undefined || this.nomeArquivos == '')
      //{
        //this.nomeArquivos = '' + file.name;
      //}
      //else
      //{
        //this.nomeArquivos += ', ' + file.name;
      //}
    }
    //document.getElementById("customFileLabel").innerHTML = this.nomeArquivos;
    //

  }

  //definirNomeArquivos()
  //{
    // Setar nome dos arquivos na label
    //var file;

    //for (var i = 0; i < this.dadosPessoais.arquivosSelecionados.length; i++)
    //{
      // obtém o item
      //file = this.dadosPessoais.arquivosSelecionados[i];

      //if(this.nomeArquivos == undefined || this.nomeArquivos == '')
      //{
        //this.nomeArquivos = '' + file.name;
      //}
      //else
      //{
        //this.nomeArquivos += ', ' + file.name;
      //}
    //}
    //document.getElementById("customFileLabel").innerHTML = this.nomeArquivos;
    //
  //}

  private uploadArquivoPessoal(arquivo: File, id: number)
  {
    const formData = new FormData();
    formData.append("file", arquivo);

    this.dadosPessoaisService.uploadArquivoPessoal(formData, id).subscribe
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

  private uploadFotoImovel(arquivo: File, id: number)
  {
    const formData = new FormData();
    formData.append("file", arquivo);

    this.dadosPessoaisService.uploadFotoImovel(formData, id).subscribe
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

  private uploadComprovanteRenda(arquivo: File, id: number)
  {
    const formData = new FormData();
    formData.append("file", arquivo);

    this.dadosPessoaisService.uploadComprovanteRenda(formData, id).subscribe
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

  removerDocumento(event)
  {
    console.log(event);

    for (var i = 0; i < this.dadosPessoais.arquivosSelecionados.length; i++)
    {
      if(this.dadosPessoais.arquivosSelecionados[i] == event)
      {
        this.dadosPessoais.arquivosSelecionados.splice(i, 1);
      }
    }

    //this.nomeArquivos = '';
    //this.definirNomeArquivos();

    //var arquivoRemover = event.srcElement.files;

    //console.log(arquivoRemover);

  }

  onChangeFotosImovel(event)
  {
    console.log(event);

    var selectedFiles = event.srcElement.files;

    //validar quantidade carregada ao mesmo tempo
    if(selectedFiles.length > 4)
    {
      alert("Escolha no máximo 4 fotos")
      return;
    }
    //

    //validar quantidade carregada ao todo:
    if(this.dadosImovel.anexoFotos == undefined || this.dadosImovel.anexoFotos.length == 0)
    {
      //this.dadosImovel.anexoFotos = selectedFiles;
    }
    else
    {
      if(this.dadosImovel.anexoFotos.length >= 4 || (selectedFiles.length + this.dadosImovel.anexoFotos.length > 4))
      {
        alert("Escolha no máximo 4 fotos")
        return;
      }
    }
    //

    // Adicionar item no array e Setar nome dos arquivos na label
    var file;
    for (var i = 0; i < selectedFiles.length; i++)
    {
      // obtém o item
      file = selectedFiles.item(i);
      this.dadosImovel.anexoFotos.push(file);
    }
    //
  }

  removerFoto(event)
  {
    console.log(event);

    for (var i = 0; i < this.dadosImovel.anexoFotos.length; i++)
    {
      if(this.dadosImovel.anexoFotos[i] == event)
      {
        this.dadosImovel.anexoFotos.splice(i, 1);
      }
    }
  }

  onChangeComprovanteRenda(event)
  {
    console.log(event);

    var selectedFiles = event.srcElement.files;

    if(selectedFiles != undefined && selectedFiles.length > 0)
    {
      this.comprovanteRenda = selectedFiles[0];
      document.getElementById("customFileLabel3").innerHTML = this.comprovanteRenda.name;
    }
  }

}
