export class DadosPessoais {
  id: number;
  cpf: string;
  nome: string;

  rg: string;
  orgaoEmissorRG: string;
  ufEmissorRG: string;

  dataNascimento: string;
  telefone: number;
  sexo: number;

  estadoCivil: number;
  nomeConjuge: string;
  dataCasamento: string;
  regimeBens: string;

  escolaridade: number;
  ocupacao: number[] = [];
  beneficiosSociais: number[] = [];

  documentoAnexo: File;
}
