import { DadosImovel } from 'src/app/models/dados-imovel.model';
import { IntegranteFamiliar } from 'src/app/models/integrante-familiar.model';
import { CaracteristicasDomicilio } from 'src/app/models/caracteristicas-domicilio.model';

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

  ocupacaoArray?: number[] = [];
  ocupacao?: string;
  ocupacaoTexto?: string;
  mostrarOutrosOcupacao?: boolean = false;

  beneficiosSociaisArray?: number[] = [];
  beneficiosSociais?: string;
  beneficiosSociaisTexto?: string;
  mostrarOutrosBeneficiosSociais?: boolean = false;

  estadoCivil?: number = 0;

  dataCasamento?: string;
  regimeBens?: number;

  valorRenda?: number = 0.00;

  anexoDocumentoIdentidade?: File;

  dadosImovel: DadosImovel;

  dadosConjuge: DadosPessoais;

  caracteristicasDomicilio: CaracteristicasDomicilio = new CaracteristicasDomicilio();

  listaIntegranteImovel?: IntegranteFamiliar[] = [];

  //situacaoCadastro: string = 'Início do Cadastro';
}
