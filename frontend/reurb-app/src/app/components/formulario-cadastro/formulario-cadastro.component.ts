import { Component, OnInit } from '@angular/core';

import { DadosPessoaisService } from 'src/app/services/dados-pessoais.service';
import { ActivatedRoute, Router } from '@angular/router';

import { DadosPessoais } from 'src/app/models/dados-pessoais.model';
import { ValidadorDadosPessoais } from 'src/app/validador/validador-dados-pessoais';
import { DadosImovel } from 'src/app/models/dados-imovel.model';
import { IntegranteFamiliar } from 'src/app/models/integrante-familiar.model';
import { CaracteristicasDomicilio } from 'src/app/models/caracteristicas-domicilio.model';

import { AlertModalService } from 'src/app/services/alert-modal.service';


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

  caracteristicasDomicilio: CaracteristicasDomicilio = new CaracteristicasDomicilio();

  tabIndex = 0;

  integranteTitular: IntegranteFamiliar;
  integranteFamiliar: IntegranteFamiliar;
  integrantesFamiliar: IntegranteFamiliar[] = [];
  valorRendaTotal: number = 0.00;
  valorRendaTotalString: string = '0,00';

  arquivosSelecionados: File[] = [];
  fotosImovelSelecionados: File[] = [];
  comprovanteRenda: File;

  //nomeArquivos: string = ''

  submitted = false;

  constructor(private dadosPessoaisService: DadosPessoaisService, private route: ActivatedRoute,
    private alertModalService: AlertModalService) {

  }

  ngOnInit(): void {
    //this.mostrarFormularioCadastro1 = true;
    //this.mostrarFormularioCadastro2 = false;
    //this.validouFormularioCadastro1 = false;
    //this.validouFormularioCadastro2 = false;

    //this.dadosPessoais.cpf = this.route.snapshot.paramMap.get('cpf');

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

    //this.validadorDadosPessoais.validarOcupacoes(this.dadosPessoais);
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

    //this.validadorDadosConjuge.validarOcupacoes(this.dadosConjuge);
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

    //this.validadorDadosPessoais.validarBeneficiosSociais(this.dadosPessoais);
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

    //this.validadorDadosConjuge.validarBeneficiosSociais(this.dadosConjuge);
  }

  salvar(): void
  {
    if(!this.validadorDadosPessoais.validarCpf(this.dadosPessoais))
    {
      this.tabIndex = 0;
      window.scrollTo(0, 0);
      this.alertModalService.showAlertDanger('Preencha o campo CPF');
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

        for (var i = 0; i < this.arquivosSelecionados.length; i++)
        {
          // obtém o item
          file = this.arquivosSelecionados[i];

          this.uploadArquivoPessoal(file, response.id);
        }

        for (var i = 0; i < this.fotosImovelSelecionados.length; i++)
        {
          // obtém o item
          file = this.fotosImovelSelecionados[i];

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
    if(this.arquivosSelecionados == undefined || this.arquivosSelecionados.length == 0)
    {
      //this.arquivosSelecionados = selectedFiles;
    }
    else
    {
      if(this.arquivosSelecionados.length >= 3 || (selectedFiles.length + this.arquivosSelecionados.length > 3))
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
      this.arquivosSelecionados.push(file);

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

    //for (var i = 0; i < this.arquivosSelecionados.length; i++)
    //{
      // obtém o item
      //file = this.arquivosSelecionados[i];

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

    for (var i = 0; i < this.arquivosSelecionados.length; i++)
    {
      if(this.arquivosSelecionados[i] == event)
      {
        this.arquivosSelecionados.splice(i, 1);
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
    if(this.fotosImovelSelecionados == undefined || this.fotosImovelSelecionados.length == 0)
    {
      //this.fotosImovelSelecionados = selectedFiles;
    }
    else
    {
      if(this.fotosImovelSelecionados.length >= 4 || (selectedFiles.length + this.fotosImovelSelecionados.length > 4))
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
      this.fotosImovelSelecionados.push(file);
    }
    //
  }

  removerFoto(event)
  {
    console.log(event);

    for (var i = 0; i < this.fotosImovelSelecionados.length; i++)
    {
      if(this.fotosImovelSelecionados[i] == event)
      {
        this.fotosImovelSelecionados.splice(i, 1);
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
