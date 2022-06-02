export class DadosImovel {
  id: number;

  enderecoImovel: string;
  cepImovel: number;
  ufImovel: string = '0';
  municipioImovel: string;
  bairroImovel: string;

  nucleoUrbanoImovel: string;
  imovelEh: string = '0';
  usoImovel: string = '0';

  tempoOcupacaoImovel: string = '0';
  mais1DomicilioLote: string = '0';
  quantidadeDomiciliosLote: string = '0';

  acessoIndependente: string = '0';
  atendidoEnergiaEletrica: string = '0';
  atendidoAgua: string = '0';
  atendidoEsgoto: string = '0';
  atendidoAguasPluviais: string = '0';
  atendidoPavimentacao: string = '0';

}
