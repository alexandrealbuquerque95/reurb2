export class DadosPessoais {
  id: number;

  nome: string;
  sexo: string = 'F';

  telefone: number;
  pessoaComDeficiencia: string = '0';

  nomeMae: string;

  nomePai: string;

  municipioNascimento: string;
  ufNascimento: string;

  dataNascimento: string;
  emancipado: string = '0';

  rg: string;
  orgaoEmissorRG: string;
  ufEmissorRG: string;
  cpf: string;

  nis: string;

  escolaridade: number;
  escolaridadeTexto: string;

  ocupacao: number[] = [];
  ocupacaoTexto: string;
  mostrarOutrosOcupacao: boolean = false;

  beneficiosSociais: number[] = [];
  beneficiosSociaisTexto: string;
  mostrarOutrosBeneficiosSociais: boolean = false;

  estadoCivil: number;
  nomeConjuge: string;

  dataCasamento: string;
  regimeBens: number;

  anexoDocumentoIdentidade: File;
}
