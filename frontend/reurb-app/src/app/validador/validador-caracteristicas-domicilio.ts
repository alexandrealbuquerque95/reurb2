import { CaracteristicasDomicilio } from 'src/app/models/caracteristicas-domicilio.model';


export class ValidadorCaracteristicasDomicilio {

  caracteristicasDomicilio: CaracteristicasDomicilio;

  numeroComodos: boolean = true;
  numeroComodosMensagem: string = 'Preencha o campo Número total de cômodos';

  numeroMoradoresPorComodo: boolean = true;
  numeroMoradoresPorComodoMensagem: string = 'Preencha o campo Número de moradores por cômodo utilizado como dormitório';

  numeroBanheiros: boolean = true;
  numeroBanheirosMensagem: string = 'Preencha o campo Número de banheiros de uso exclusivo do grupo familiar';

  materialParedeExternaArray: boolean = true;
  materialParedeExternaArrayMensagem: string = 'Preencha o campo Paredes externas – Materiais';

  materialParedeExternaTexto: boolean = true;
  materialParedeExternaTextoMensagem: string = 'Preencha o campo Paredes externas | Outros';

  materialPisoArray: boolean = true;
  materialPisoArrayMensagem: string = 'Preencha o campo Piso – Materiais';

  materialPisoTexto: boolean = true;
  materialPisoTextoMensagem: string = 'Preencha o campo Piso | Outros';

  materialInstalacaoEletricaArray: boolean = true;
  materialInstalacaoEletricaArrayMensagem: string = 'Preencha o campo Instalações elétricas – Materiais';

  materialInstalacaoEletricaTexto: boolean = true;
  materialInstalacaoEletricaTextoMensagem: string = 'Preencha o campo Instalações elétricas | Outros';

  esgotoSanitarioArray: boolean = true;
  esgotoSanitarioArrayMensagem: string = 'Preencha o campo Esgotamento sanitário – Materiais';

  esgotoSanitarioTexto: boolean = true;
  esgotoSanitarioTextoMensagem: string = 'Preencha o campo Esgotamento sanitário | Outros';

  camposInvalidos: string = '';
  validouDados: boolean = true;

  validarDados(caracteristicasDomicilio: CaracteristicasDomicilio): ValidadorCaracteristicasDomicilio
  {
    this.camposInvalidos = '';
    this.validouDados = true;

    this.validarNumeroComodos(caracteristicasDomicilio);
    this.validarNumeroMoradoresPorComodo(caracteristicasDomicilio);
    this.validarNumeroBanheiros(caracteristicasDomicilio);
    this.validarMaterialParedeExternaArray(caracteristicasDomicilio);
    this.validarMaterialParedeExternaTexto(caracteristicasDomicilio);
    this.validarMaterialPisoArray(caracteristicasDomicilio);
    this.validarMaterialPisoTexto(caracteristicasDomicilio);
    this.validarMaterialInstalacaoEletricaArray(caracteristicasDomicilio);
    this.validarMaterialInstalacaoEletricaTexto(caracteristicasDomicilio);
    this.validarEsgotoSanitarioArray(caracteristicasDomicilio);
    this.validarEsgotoSanitarioTexto(caracteristicasDomicilio);


    return this;
  }

  adicionarCampoInvalido(campo: string)
  {
    if(this.camposInvalidos == undefined || this.camposInvalidos == '')
    {
      this.camposInvalidos = campo;
    }
    else
    {
      this.camposInvalidos += ', ' + campo;
    }
  }

  validarNumeroComodos(caracteristicasDomicilio: CaracteristicasDomicilio)
  {
    if(caracteristicasDomicilio.numeroComodos == undefined || caracteristicasDomicilio.numeroComodos == '0')
    {
      this.numeroComodos = false;
      this.validouDados = false;
      this.adicionarCampoInvalido('Número total de cômodos');
    }
    else
    {
      this.numeroComodos = true;
    }
  }

  validarNumeroMoradoresPorComodo(caracteristicasDomicilio: CaracteristicasDomicilio)
  {
    if(caracteristicasDomicilio.numeroMoradoresPorComodo == undefined || caracteristicasDomicilio.numeroMoradoresPorComodo == '0')
    {
      this.numeroMoradoresPorComodo = false;
      this.validouDados = false;
      this.adicionarCampoInvalido('Número de moradores por cômodo utilizado como dormitório');
    }
    else
    {
      this.numeroMoradoresPorComodo = true;
    }
  }

  validarNumeroBanheiros(caracteristicasDomicilio: CaracteristicasDomicilio)
  {
    if(caracteristicasDomicilio.numeroBanheiros == undefined || caracteristicasDomicilio.numeroBanheiros == '0')
    {
      this.numeroBanheiros = false;
      this.validouDados = false;
      this.adicionarCampoInvalido('Número de banheiros de uso exclusivo do grupo familiar');
    }
    else
    {
      this.numeroBanheiros = true;
    }
  }

  validarMaterialParedeExternaArray(caracteristicasDomicilio: CaracteristicasDomicilio)
  {
    if(caracteristicasDomicilio.materialParedeExternaArray == undefined || caracteristicasDomicilio.materialParedeExternaArray.length == 0)
    {
      this.materialParedeExternaArray = false;
      this.validouDados = false;
      this.adicionarCampoInvalido('Paredes externas – Materiais');
    }
    else
    {
      this.materialParedeExternaArray = true;
    }
  }

  validarMaterialParedeExternaTexto(caracteristicasDomicilio: CaracteristicasDomicilio)
  {
    if(caracteristicasDomicilio.mostrarOutrosMaterialParedeExterna && caracteristicasDomicilio.materialParedeExternaTexto == undefined || caracteristicasDomicilio.materialParedeExternaTexto == '')
    {
      this.materialParedeExternaTexto = false;
      this.validouDados = false;
      this.adicionarCampoInvalido('Paredes externas | Outros');
    }
    else
    {
      this.materialParedeExternaTexto = true;
    }
  }

  validarMaterialPisoArray(caracteristicasDomicilio: CaracteristicasDomicilio)
  {
    if(caracteristicasDomicilio.materialPisoArray == undefined || caracteristicasDomicilio.materialPisoArray.length == 0)
    {
      this.materialPisoArray = false;
      this.validouDados = false;
      this.adicionarCampoInvalido('Piso – Materiais');
    }
    else
    {
      this.materialPisoArray = true;
    }
  }

  validarMaterialPisoTexto(caracteristicasDomicilio: CaracteristicasDomicilio)
  {
    if(caracteristicasDomicilio.mostrarOutrosMaterialPiso && caracteristicasDomicilio.materialPisoTexto == undefined || caracteristicasDomicilio.materialPisoTexto == '')
    {
      this.materialPisoTexto = false;
      this.validouDados = false;
      this.adicionarCampoInvalido('Piso | Outros');
    }
    else
    {
      this.materialPisoTexto = true;
    }
  }

  validarMaterialInstalacaoEletricaArray(caracteristicasDomicilio: CaracteristicasDomicilio)
  {
    if(caracteristicasDomicilio.materialInstalacaoEletricaArray == undefined || caracteristicasDomicilio.materialInstalacaoEletricaArray.length == 0)
    {
      this.materialInstalacaoEletricaArray = false;
      this.validouDados = false;
      this.adicionarCampoInvalido('Instalações elétricas – Materiais');
    }
    else
    {
      this.materialInstalacaoEletricaArray = true;
    }
  }

  validarMaterialInstalacaoEletricaTexto(caracteristicasDomicilio: CaracteristicasDomicilio)
  {
    if(caracteristicasDomicilio.mostrarOutrosMaterialInstalacaoEletrica && caracteristicasDomicilio.materialInstalacaoEletricaTexto == undefined || caracteristicasDomicilio.materialInstalacaoEletricaTexto == '')
    {
      this.materialInstalacaoEletricaTexto = false;
      this.validouDados = false;
      this.adicionarCampoInvalido('Instalações elétricas | Outros');
    }
    else
    {
      this.materialInstalacaoEletricaTexto = true;
    }
  }

  validarEsgotoSanitarioArray(caracteristicasDomicilio: CaracteristicasDomicilio)
  {
    if(caracteristicasDomicilio.esgotoSanitarioArray == undefined || caracteristicasDomicilio.esgotoSanitarioArray.length == 0)
    {
      this.esgotoSanitarioArray = false;
      this.validouDados = false;
      this.adicionarCampoInvalido('Esgotamento sanitário – Materiais');
    }
    else
    {
      this.esgotoSanitarioArray = true;
    }
  }

  validarEsgotoSanitarioTexto(caracteristicasDomicilio: CaracteristicasDomicilio)
  {
    if(caracteristicasDomicilio.mostrarOutrosEsgotoSanitario && caracteristicasDomicilio.esgotoSanitarioTexto == undefined || caracteristicasDomicilio.esgotoSanitarioTexto == '')
    {
      this.esgotoSanitarioTexto = false;
      this.validouDados = false;
      this.adicionarCampoInvalido('Esgotamento sanitário | Outros');
    }
    else
    {
      this.esgotoSanitarioTexto = true;
    }
  }

}
