import { DadosImovel } from 'src/app/models/dados-imovel.model';
import { IntegranteFamiliar } from 'src/app/models/integrante-familiar.model';

export class DadosPessoais {
  id?: any;

  nome?: string;
  sexo?: string = '1';

  celular?: number;
  telefone?: number;
  pessoaComDeficiencia?: string = '0';

  nomeMae?: string;

  nomePai?: string;

  municipioNascimento?: string;
  ufNascimento?: string = '';

  dataNascimento?: string;
  emancipado?: string = '';

  rg?: string;
  orgaoEmissorRG?: string;
  ufEmissorRG?: string = '';
  cpf?: string;

  nis?: string;

  escolaridade?: number = 0;
  escolaridadeTexto?: string;

  ocupacao?: number[] = [];
  ocupacaoTexto?: string;
  mostrarOutrosOcupacao?: boolean = false;

  beneficiosSociais?: number[] = [];
  beneficiosSociaisTexto?: string;
  mostrarOutrosBeneficiosSociais?: boolean = false;

  estadoCivil?: number = 0;

  dataCasamento?: string;
  regimeBens?: number;

  valorRenda?: number = 0.00;

  anexoDocumentoIdentidade?: File;

  dadosImovel: DadosImovel;

  dadosConjuge: DadosPessoais;

  listaIntegranteImovel?: IntegranteFamiliar[] = [];

  //situacaoCadastro: string = 'Início do Cadastro';
}
