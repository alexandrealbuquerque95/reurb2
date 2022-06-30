import { DadosPessoais } from 'src/app/models/dados-pessoais.model';


export class ValidadorDadosPessoais {

  dadosPessoais: DadosPessoais;

  nome: boolean = true;
  nomeMensagem: string = 'Preencha o campo Nome';
  sexo: boolean = true;
  sexoMensagem: string = 'Selecione o campo Sexo';

  celular: boolean = true;
  celularMensagem: string = 'Preencha o campo Celular para contato com DDD';
  pessoaComDeficiencia: boolean = true;
  pessoaComDeficienciaMensagem: string = 'Selecione o campo Pessoa com deficiência';

  nomeMae: boolean = true;
  nomeMaeMensagem: string = 'Preencha o campo Nome da mãe';

  nomePai: boolean = false;
  //nomePaiMensagem: string = 'Preencha o campo Nome do pai';

  municipioNascimento: boolean = true;
  municipioNascimentoMensagem: string = 'Preencha o campo Município de nascimento';
  ufNascimento: boolean = true;
  ufNascimentoMensagem: string = 'Preencha o campo UF';

  dataNascimento: boolean = true;
  dataNascimentoMensagem: string = 'Preencha o campo Data de nascimento';
  emancipado: boolean = false;
  //emancipadoMensagem: string = 'Preencha o campo Emancipado';

  rg: boolean = true;
  rgMensagem: string = 'Preencha o campo Carteira de identidade';
  orgaoEmissorRG: boolean = true;
  orgaoEmissorRGMensagem: string = 'Preencha o campo Órgão emissor';
  ufEmissorRG: boolean = true;
  ufEmissorRGMensagem: string = 'Preencha o campo UF emissor';
  cpf: boolean = true;
  cpfMensagem: string = 'Preencha o campo CPF';

  nis: boolean = true;
  nisMensagem: string = 'Preencha o campo Numero de identificação social (NIS)';

  escolaridade: boolean = true;
  escolaridadeMensagem: string = 'Selecione o campo Escolaridade';
  escolaridadeTexto: boolean = true;
  escolaridadeTextoMensagem: string = 'Preencha o campo Escolaridade | Outros';

  ocupacao: boolean = true;
  ocupacaoMensagem: string = 'Preencha o campo Ocupação';
  ocupacaoTexto: boolean = true;
  ocupacaoTextoMensagem: string = 'Preencha o campo Ocupação | Outros';

  beneficiosSociais: boolean = true;
  beneficiosSociaisMensagem: string = 'Preencha o campo Benefícios sociais';
  beneficiosSociaisTexto: boolean = true;
  beneficiosSociaisTextoMensagem: string = 'Preencha o campo Benefícios sociais | Outros';

  estadoCivil: boolean = true;
  estadoCivilMensagem: string = 'Preencha o campo Estado Civil';

  dataCasamento: boolean = true;
  dataCasamentoMensagem: string = 'Preencha o campo Data do casamento';
  regimeBens: boolean = true;
  regimeBensMensagem: string = 'Preencha o campo Regime de bens';

  anexoDocumentoIdentidade: boolean = true;
  anexoDocumentoIdentidadeMensagem: string = 'Selecione o anexo de algum documento de identificação (RG, CPF, CNH, Certidão Casamento)';

  camposInvalidos: string = '';
  validouDados: boolean = true;

  validarDados(dadosPessoais: DadosPessoais): ValidadorDadosPessoais
  {
    this.camposInvalidos = '';
    this.validouDados = true;

    this.validarNome(dadosPessoais);
    this.validarSexo(dadosPessoais);
    this.validarCpf(dadosPessoais);
    this.validarRg(dadosPessoais);
    this.validarOrgaoEmissorRG(dadosPessoais);
    this.validarUfEmissorRG(dadosPessoais);
    this.validarCelular(dadosPessoais);
    this.validarPessoaComDeficiencia(dadosPessoais);
    this.validarNomeMae(dadosPessoais);
    this.validarMunicipioNascimento(dadosPessoais);
    this.validarUfNascimento(dadosPessoais);
    this.validarDataNascimento(dadosPessoais);
    this.validarEscolaridade(dadosPessoais);
    this.validarEscolaridadeTexto(dadosPessoais);
    this.validarOcupacoes(dadosPessoais);
    this.validarMostrarOutrosOcupacao(dadosPessoais);
    this.validarBeneficiosSociais(dadosPessoais)
    this.validarMostrarOutrosBeneficiosSociais(dadosPessoais);
    this.validarEstadoCivil(dadosPessoais);
    this.validarDataCasamento(dadosPessoais);
    this.validarRegimeBens(dadosPessoais);
    this.validarAnexos(dadosPessoais);

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

  validarNome(dadosPessoais: DadosPessoais)
  {
    if(dadosPessoais.nome == undefined || dadosPessoais.nome == '')
    {
      this.nome = false;
      this.validouDados = false;
      this.adicionarCampoInvalido('Nome Completo');
    }
    else
    {
      this.nome = true;
    }
  }

  validarSexo(dadosPessoais: DadosPessoais)
  {
    if(dadosPessoais.sexo == undefined || dadosPessoais.sexo == '')
    {
      this.sexo = false;
      this.validouDados = false;
      this.adicionarCampoInvalido('Sexo');
    }
    else
    {
      this.sexo = true;
    }
  }

  validarCpf(dadosPessoais: DadosPessoais): boolean
  {
    if(dadosPessoais.cpf == undefined || dadosPessoais.cpf == '')
    {
      this.cpf = false;
      this.validouDados = false;
      this.adicionarCampoInvalido('CPF');
      return false;
    }
    else
    {
      this.cpf = true;
      return true;
    }
  }

  validarRg(dadosPessoais: DadosPessoais)
  {
    if(dadosPessoais.rg == undefined || dadosPessoais.rg == '')
    {
      this.rg = false;
      this.validouDados = false;
      this.adicionarCampoInvalido('Carteira de identidade');
    }
    else
    {
      this.rg = true;
    }
  }

  validarOrgaoEmissorRG(dadosPessoais: DadosPessoais)
  {
    if(dadosPessoais.orgaoEmissorRG == undefined || dadosPessoais.orgaoEmissorRG == '')
    {
      this.orgaoEmissorRG = false;
      this.validouDados = false;
      this.adicionarCampoInvalido('Órgão emissor');
    }
    else
    {
      this.orgaoEmissorRG = true;
    }
  }

  validarUfEmissorRG(dadosPessoais: DadosPessoais)
  {
    if(dadosPessoais.ufEmissorRG == undefined || dadosPessoais.ufEmissorRG == '')
    {
      this.ufEmissorRG = false;
      this.validouDados = false;
      this.adicionarCampoInvalido('UF emissor');
    }
    else
    {
      this.ufEmissorRG = true;
    }
  }

  validarCelular(dadosPessoais: DadosPessoais)
  {
    if(dadosPessoais.celular == undefined || dadosPessoais.celular == 0)
    {
      this.celular = false;
      this.validouDados = false;
      this.adicionarCampoInvalido('Celular para contato com DDD');
    }
    else
    {
      this.celular = true;
    }
  }

  validarPessoaComDeficiencia(dadosPessoais: DadosPessoais)
  {
    if(dadosPessoais.pessoaComDeficiencia == undefined || dadosPessoais.pessoaComDeficiencia == '')
    {
      this.pessoaComDeficiencia = false;
      this.validouDados = false;
      this.adicionarCampoInvalido('Pessoa com deficiência');
    }
    else
    {
      this.pessoaComDeficiencia = true;
    }
  }

  validarNomeMae(dadosPessoais: DadosPessoais)
  {
    if(dadosPessoais.nomeMae == undefined || dadosPessoais.nomeMae == '')
    {
      this.nomeMae = false;
      this.validouDados = false;
      this.adicionarCampoInvalido('Nome da mãe');
    }
    else
    {
      this.nomeMae = true;
    }
  }

  validarMunicipioNascimento(dadosPessoais: DadosPessoais)
  {
    if(dadosPessoais.municipioNascimento == undefined || dadosPessoais.municipioNascimento == '')
    {
      this.municipioNascimento = false;
      this.validouDados = false;
      this.adicionarCampoInvalido('Município de nascimento');
    }
    else
    {
      this.municipioNascimento = true;
    }
  }

  validarUfNascimento(dadosPessoais: DadosPessoais)
  {
    if(dadosPessoais.ufNascimento == undefined || dadosPessoais.ufNascimento == '')
    {
      this.ufNascimento = false;
      this.validouDados = false;
      this.adicionarCampoInvalido('UF');
    }
    else
    {
      this.ufNascimento = true;
    }
  }

  validarDataNascimento(dadosPessoais: DadosPessoais)
  {
    if(dadosPessoais.dataNascimento == undefined || dadosPessoais.dataNascimento == '')
    {
      this.dataNascimento = false;
      this.validouDados = false;
      this.adicionarCampoInvalido('Data de nascimento');
    }
    else
    {
      this.dataNascimento = true;
    }
  }

  validarEscolaridade(dadosPessoais: DadosPessoais)
  {
    if(dadosPessoais.escolaridade != 7 )
    {
      dadosPessoais.escolaridadeTexto = '';
    }

    if(dadosPessoais.escolaridade == undefined || dadosPessoais.escolaridade == 0)
    {
      this.escolaridade = false;
      this.validouDados = false;
      this.adicionarCampoInvalido('Escolaridade');
    }
    else
    {
      this.escolaridade = true;
    }
  }

  validarEscolaridadeTexto(dadosPessoais: DadosPessoais)
  {
    if(dadosPessoais.escolaridade == 7 && (dadosPessoais.escolaridadeTexto == undefined || dadosPessoais.escolaridadeTexto == ''))
    {
      this.escolaridadeTexto = false;
      this.validouDados = false;
      this.adicionarCampoInvalido('Escolaridade | Outros');
    }
    else
    {
      this.escolaridadeTexto = true;
    }
  }

  validarOcupacoes(dadosPessoais: DadosPessoais)
  {
    if(dadosPessoais.ocupacaoArray == undefined || dadosPessoais.ocupacaoArray.length == 0)
    {
      this.ocupacao = false;
      this.validouDados = false;
      this.adicionarCampoInvalido('Ocupação');
    }
    else
    {
      this.ocupacao = true;
    }
  }

  validarMostrarOutrosOcupacao(dadosPessoais: DadosPessoais)
  {
    if(dadosPessoais.mostrarOutrosOcupacao && (dadosPessoais.ocupacaoTexto == undefined || dadosPessoais.ocupacaoTexto == ''))
    {
      this.ocupacaoTexto = false;
      this.validouDados = false;
      this.adicionarCampoInvalido('Ocupação | Outros');
    }
    else
    {
      this.ocupacaoTexto = true;
    }
  }

  validarBeneficiosSociais(dadosPessoais: DadosPessoais)
  {
    if(dadosPessoais.beneficiosSociaisArray == undefined || dadosPessoais.beneficiosSociaisArray.length == 0)
    {
      this.beneficiosSociais = false;
      this.validouDados = false;
      this.adicionarCampoInvalido('Beneficios sociais');
    }
    else
    {
      this.beneficiosSociais = true;
    }
  }

  validarMostrarOutrosBeneficiosSociais(dadosPessoais: DadosPessoais)
  {
    if(dadosPessoais.mostrarOutrosBeneficiosSociais && (dadosPessoais.beneficiosSociaisTexto == undefined || dadosPessoais.beneficiosSociaisTexto == ''))
    {
      this.beneficiosSociaisTexto = false;
      this.validouDados = false;
      this.adicionarCampoInvalido('Benefícios sociais | Outros');
    }
    else
    {
      this.beneficiosSociaisTexto = true;
    }
  }

  validarEstadoCivil(dadosPessoais: DadosPessoais)
  {
    if(dadosPessoais.estadoCivil == undefined || dadosPessoais.estadoCivil == 0)
    {
      this.estadoCivil = false;
      this.validouDados = false;
      this.adicionarCampoInvalido('Estado Civil');
    }
    else
    {
      this.estadoCivil = true;
    }
  }


  validarDataCasamento(dadosPessoais: DadosPessoais)
  {
    if((dadosPessoais.estadoCivil == 2 || dadosPessoais.estadoCivil == 6) && dadosPessoais.dataCasamento == undefined || dadosPessoais.dataCasamento == '')
    {
      this.dataCasamento = false;
      this.validouDados = false;
      this.adicionarCampoInvalido('Data do casamento ou início da união estável');
    }
    else
    {
      this.dataCasamento = true;
    }
  }

  validarRegimeBens(dadosPessoais: DadosPessoais)
  {
    if((dadosPessoais.estadoCivil == 2 || dadosPessoais.estadoCivil == 6) && dadosPessoais.regimeBens == undefined || dadosPessoais.regimeBens == 0)
    {
      this.regimeBens = false;
      this.validouDados = false;
      this.adicionarCampoInvalido('Regime de bens');
    }
    else
    {
      this.regimeBens = true;
    }
  }

  validarAnexos(dadosPessoais: DadosPessoais)
  {
    if(dadosPessoais.arquivosSelecionados == undefined || dadosPessoais.arquivosSelecionados.length == 0)
    {
      this.anexoDocumentoIdentidade = false;
      this.validouDados = false;
      this.adicionarCampoInvalido('Faça o anexo de algum documento de identificação (RG, CPF, CNH, Certidão Casamento)');
    }
    else
    {
      this.anexoDocumentoIdentidade = true;
    }
  }


}
