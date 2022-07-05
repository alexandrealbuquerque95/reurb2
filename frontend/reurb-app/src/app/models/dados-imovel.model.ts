export class DadosImovel {
  id: number;

  enderecoImovel: string;
  cepImovel: number;
  ufImovel: string = '';
  municipioImovel: string;
  bairroImovel: string;

  nucleoUrbanoImovel: string;
  imovelEh: string = '';
  usoImovel: string = '';

  tempoOcupacaoImovel: string = '';
  mais1DomicilioLote: string = '';
  quantidadeDomiciliosLote: string = '';

  acessoIndependente: string = '0';
  atendidoEnergiaEletrica: string = '0';
  atendidoAgua: string = '0';
  atendidoEsgoto: string = '0';
  atendidoAguasPluviais: string = '0';
  atendidoPavimentacao: string = '0';

  anexoFotos?: File[] = [];

}
