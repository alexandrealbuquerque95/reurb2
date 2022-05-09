export class DadosPessoais {
  id: number;

  nome: string;
  sexo: string = '';

  celular: number;
  telefone: number;
  pessoaComDeficiencia: string = '';

  nomeMae: string;

  nomePai: string;

  municipioNascimento: string;
  ufNascimento: string = '';

  dataNascimento: string;
  emancipado: string = '';

  rg: string;
  orgaoEmissorRG: string;
  ufEmissorRG: string = '';
  cpf: string;

  nis: string;

  escolaridade: number = 0;
  escolaridadeTexto: string;

  ocupacao: number[] = [];
  ocupacaoTexto: string;
  mostrarOutrosOcupacao: boolean = false;

  beneficiosSociais: number[] = [];
  beneficiosSociaisTexto: string;
  mostrarOutrosBeneficiosSociais: boolean = false;

  estadoCivil: number = 0;
  nomeConjuge: string;

  dataCasamento: string;
  regimeBens: number;

  valorRenda: number = 0.00;

  anexoDocumentoIdentidade: File;
}
