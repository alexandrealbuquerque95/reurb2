export class DadosPessoais {
  id: number;
  cpf: string;
  nome: string;

  rg: string;
  orgaoEmissorRG: string;
  ufEmissorRG: string;

  dataNascimento: Date;
  telefone: number;
  sexo: number;

  estadoCivil: number;
  nomeConjuge: string;

  documentoAnexo: File;
}
