import { DadosPessoais } from 'src/app/models/dados-pessoais.model';


export class ValidadorDadosPessoais {

  dadosPessoais: DadosPessoais;

  nome: boolean = true;
  nomeMensagem: string = 'Preencha o campo Nome';
  sexo: boolean = true;
  sexoMensagem: string = 'Selecione o campo Sexo';

  telefone: boolean = true;
  telefoneMensagem: string = 'Preencha o campo Telefone para contato com DDD';
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
  nomeConjuge: boolean = true;
  nomeConjugeMensagem: string = 'Preencha o campo Nome do(a) cônjuge';

  dataCasamento: boolean = true;
  dataCasamentoMensagem: string = 'Preencha o campo Data do casamento';
  regimeBens: boolean = true;
  regimeBensMensagem: string = 'Preencha o campo Regime de bens';

  anexoDocumentoIdentidade: boolean = true;
  anexoDocumentoIdentidadeMensagem: string = 'Selecione o anexo de algum documento de identificação (RG, CPF, CNH, Certidão Casamento)';


  validouDados: boolean = true;

  validarDados(dadosPessoais: DadosPessoais): ValidadorDadosPessoais
  {
    this.validouDados = true;

    if(dadosPessoais.nome == undefined || dadosPessoais.nome == '')
    {
      this.nome = false;
      this.validouDados = false;
    }
    else
    {
      this.nome = true;
    }

    if(dadosPessoais.sexo == undefined || dadosPessoais.sexo == '')
    {
      this.sexo = false;
      this.validouDados = false;
    }
    else
    {
      this.sexo = true;
    }

    if(dadosPessoais.telefone == undefined || dadosPessoais.telefone == 0)
    {
      this.telefone = false;
      this.validouDados = false;
    }
    else
    {
      this.telefone = true;
    }

    if(dadosPessoais.pessoaComDeficiencia == undefined || dadosPessoais.pessoaComDeficiencia == '')
    {
      this.pessoaComDeficiencia = false;
      this.validouDados = false;
    }
    else
    {
      this.pessoaComDeficiencia = true;
    }

    if(dadosPessoais.nomeMae == undefined || dadosPessoais.nomeMae == '')
    {
      this.nomeMae = false;
      this.validouDados = false;
    }
    else
    {
      this.nomeMae = true;
    }

    if(dadosPessoais.municipioNascimento == undefined || dadosPessoais.municipioNascimento == '')
    {
      this.municipioNascimento = false;
      this.validouDados = false;
    }
    else
    {
      this.municipioNascimento = true;
    }

    if(dadosPessoais.ufNascimento == undefined || dadosPessoais.ufNascimento == '')
    {
      this.ufNascimento = false;
      this.validouDados = false;
    }
    else
    {
      this.ufNascimento = true;
    }

    if(dadosPessoais.dataNascimento == undefined || dadosPessoais.dataNascimento == '')
    {
      this.dataNascimento = false;
      this.validouDados = false;
    }
    else
    {
      this.dataNascimento = true;
    }

    if(dadosPessoais.rg == undefined || dadosPessoais.rg == '')
    {
      this.rg = false;
      this.validouDados = false;
    }
    else
    {
      this.rg = true;
    }

    if(dadosPessoais.orgaoEmissorRG == undefined || dadosPessoais.orgaoEmissorRG == '')
    {
      this.orgaoEmissorRG = false;
      this.validouDados = false;
    }
    else
    {
      this.orgaoEmissorRG = true;
    }

    if(dadosPessoais.ufEmissorRG == undefined || dadosPessoais.ufEmissorRG == '')
    {
      this.ufEmissorRG = false;
      this.validouDados = false;
    }
    else
    {
      this.ufEmissorRG = true;
    }

    if(dadosPessoais.cpf == undefined || dadosPessoais.cpf == '')
    {
      this.cpf = false;
      this.validouDados = false;
    }
    else
    {
      this.cpf = true;
    }

    if(dadosPessoais.nis == undefined || dadosPessoais.nis == '')
    {
      this.nis = false;
      this.validouDados = false;
    }
    else
    {
      this.nis = true;
    }

    if(dadosPessoais.escolaridade == undefined || dadosPessoais.escolaridade == 0)
    {
      this.escolaridade = false;
      this.validouDados = false;
    }
    else
    {
      this.escolaridade = true;
    }

    if(dadosPessoais.escolaridade == 7 && dadosPessoais.escolaridadeTexto == undefined || dadosPessoais.escolaridadeTexto == '')
    {
      this.escolaridadeTexto = false;
      this.validouDados = false;
    }
    else
    {
      this.escolaridadeTexto = true;
    }

    if(dadosPessoais.ocupacao == undefined || dadosPessoais.ocupacao.length == 0)
    {
      this.ocupacao = false;
      this.validouDados = false;
    }
    else
    {
      this.ocupacao = true;
    }

    if(dadosPessoais.mostrarOutrosOcupacao && dadosPessoais.ocupacaoTexto == undefined || dadosPessoais.ocupacaoTexto == '')
    {
      this.ocupacaoTexto = false;
      this.validouDados = false;
    }
    else
    {
      this.ocupacaoTexto = true;
    }

    if(dadosPessoais.beneficiosSociais == undefined || dadosPessoais.beneficiosSociais.length == 0)
    {
      this.beneficiosSociais = false;
      this.validouDados = false;
    }
    else
    {
      this.beneficiosSociais = true;
    }

    if(dadosPessoais.mostrarOutrosBeneficiosSociais && dadosPessoais.beneficiosSociaisTexto == undefined || dadosPessoais.beneficiosSociaisTexto == '')
    {
      this.beneficiosSociaisTexto = false;
      this.validouDados = false;
    }
    else
    {
      this.beneficiosSociaisTexto = true;
    }

    if(dadosPessoais.estadoCivil == undefined || dadosPessoais.estadoCivil == 0)
    {
      this.estadoCivil = false;
      this.validouDados = false;
    }
    else
    {
      this.estadoCivil = true;
    }

    if(dadosPessoais.estadoCivil == 6 && dadosPessoais.nomeConjuge == undefined || dadosPessoais.nomeConjuge == '')
    {
      this.nomeConjuge = false;
      this.validouDados = false;
    }
    else
    {
      this.nomeConjuge = true;
    }

    if(dadosPessoais.estadoCivil == 6 && dadosPessoais.dataCasamento == undefined || dadosPessoais.dataCasamento == '')
    {
      this.dataCasamento = false;
      this.validouDados = false;
    }
    else
    {
      this.dataCasamento = true;
    }

    if(dadosPessoais.estadoCivil == 6 && dadosPessoais.regimeBens == undefined || dadosPessoais.regimeBens == 0)
    {
      this.regimeBens = false;
      this.validouDados = false;
    }
    else
    {
      this.regimeBens = true;
    }

    if(dadosPessoais.anexoDocumentoIdentidade == undefined)
    {
      this.anexoDocumentoIdentidade = false;
      this.validouDados = false;
    }
    else
    {
      this.anexoDocumentoIdentidade = true;
    }





    return this;
  }
}
