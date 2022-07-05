import { DadosImovel } from 'src/app/models/dados-imovel.model';

export class ValidadorIdentificacaoImovel {

  dadosImovel: DadosImovel;

  enderecoImovel: boolean = true;
  enderecoImovelMensagem: string = 'Preencha o campo Localização do imóvel';

  cepImovel: boolean = true;
  cepImovelMensagem: string = 'Preencha o campo CEP';

  ufImovel: boolean = true;
  ufImovelMensagem: string = 'Selecione o campo UF';

  municipioImovel: boolean = true;
  municipioImovelMensagem: string = 'Preencha o campo Município';

  bairroImovel: boolean = true;
  bairroImovelMensagem: string = 'Preencha o campo Bairro';

  imovelEh: boolean = true;
  imovelEhMensagem: string = 'Selecione o campo Esse imóvel é';

  usoImovel: boolean = true;
  usoImovelMensagem: string = 'Selecione o campo Esse imóvel é para uso';

  tempoOcupacaoImovel: boolean = true;
  tempoOcupacaoImovelMensagem: string = 'Selecione o campo Tempo de ocupação do imóvel';

  quantidadeDomiciliosLote: boolean = true;
  quantidadeDomiciliosLoteMensagem: string = 'Selecione o campo Quantos domicílios existem no lote no total';

  anexoFotos: boolean = true;
  anexoFotosMensagem: string = 'Faça o anexo das fotos do imóvel';

  camposInvalidos: string = '';
  validouDados: boolean = true;

  validarDados(dadosImovel: DadosImovel): ValidadorIdentificacaoImovel
  {
    this.camposInvalidos = '';
    this.validouDados = true;

    this.validarEnderecoImovel(dadosImovel);
    this.validarCepImovel(dadosImovel);
    this.validarUfImovel(dadosImovel);
    this.validarMunicipioImovel(dadosImovel);
    this.validarBairroImovel(dadosImovel);
    this.validarImovelEh(dadosImovel);
    this.validarUsoImovel(dadosImovel);
    this.validarTempoOcupacaoImovel(dadosImovel);
    this.validarQuantidadeDomiciliosLote(dadosImovel);
    this.validarAnexos(dadosImovel);

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

  validarEnderecoImovel(dadosImovel: DadosImovel)
  {
    if(dadosImovel.enderecoImovel == undefined || dadosImovel.enderecoImovel == '')
    {
      this.enderecoImovel = false;
      this.validouDados = false;
      this.adicionarCampoInvalido('Localização do imóvel');
    }
    else
    {
      this.enderecoImovel = true;
    }
  }

  validarCepImovel(dadosImovel: DadosImovel)
  {
    if(dadosImovel.cepImovel == undefined || dadosImovel.cepImovel == 0)
    {
      this.cepImovel = false;
      this.validouDados = false;
      this.adicionarCampoInvalido('CEP');
    }
    else
    {
      this.cepImovel = true;
    }
  }

  validarUfImovel(dadosImovel: DadosImovel)
  {
    if(dadosImovel.ufImovel == undefined || dadosImovel.ufImovel == '')
    {
      this.ufImovel = false;
      this.validouDados = false;
      this.adicionarCampoInvalido('UF');
    }
    else
    {
      this.ufImovel = true;
    }
  }

  validarMunicipioImovel(dadosImovel: DadosImovel)
  {
    if(dadosImovel.municipioImovel == undefined || dadosImovel.municipioImovel == '')
    {
      this.municipioImovel = false;
      this.validouDados = false;
      this.adicionarCampoInvalido('Município');
    }
    else
    {
      this.municipioImovel = true;
    }
  }

  validarBairroImovel(dadosImovel: DadosImovel)
  {
    if(dadosImovel.bairroImovel == undefined || dadosImovel.bairroImovel == '')
    {
      this.bairroImovel = false;
      this.validouDados = false;
      this.adicionarCampoInvalido('Bairro');
    }
    else
    {
      this.bairroImovel = true;
    }
  }

  validarImovelEh(dadosImovel: DadosImovel)
  {
    if(dadosImovel.imovelEh == undefined || dadosImovel.imovelEh == '')
    {
      this.imovelEh = false;
      this.validouDados = false;
      this.adicionarCampoInvalido('Esse imóvel é');
    }
    else
    {
      this.imovelEh = true;
    }
  }

  validarUsoImovel(dadosImovel: DadosImovel)
  {
    if(dadosImovel.usoImovel == undefined || dadosImovel.usoImovel == '')
    {
      this.usoImovel = false;
      this.validouDados = false;
      this.adicionarCampoInvalido('Esse imóvel é para uso');
    }
    else
    {
      this.usoImovel = true;
    }
  }

  validarTempoOcupacaoImovel(dadosImovel: DadosImovel)
  {
    if(dadosImovel.tempoOcupacaoImovel == undefined || dadosImovel.tempoOcupacaoImovel == '')
    {
      this.tempoOcupacaoImovel = false;
      this.validouDados = false;
      this.adicionarCampoInvalido('Tempo de ocupação do imóvel');
    }
    else
    {
      this.tempoOcupacaoImovel = true;
    }
  }

  validarQuantidadeDomiciliosLote(dadosImovel: DadosImovel)
  {
    if(dadosImovel.mais1DomicilioLote != undefined && dadosImovel.mais1DomicilioLote == '1')
    {
      if(dadosImovel.quantidadeDomiciliosLote == undefined || dadosImovel.quantidadeDomiciliosLote == '')
      {
        this.quantidadeDomiciliosLote = false;
        this.validouDados = false;
        this.adicionarCampoInvalido('Quantos domicílios existem no lote no total');
      }
      else
      {
        this.quantidadeDomiciliosLote = true;
      }
    }
    else
    {
      this.quantidadeDomiciliosLote = true;
    }
  }

  validarAnexos(dadosImovel: DadosImovel)
  {
    if(dadosImovel.anexoFotos == undefined || dadosImovel.anexoFotos.length == 0)
    {
      this.anexoFotos = false;
      this.validouDados = false;
      this.adicionarCampoInvalido('Faça o anexo das fotos do imóvel');
    }
    else
    {
      this.anexoFotos = true;
    }
  }

}
