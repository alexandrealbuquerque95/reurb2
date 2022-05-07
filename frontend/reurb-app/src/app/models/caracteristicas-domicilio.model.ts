export class CaracteristicasDomicilio {
  id: number;

  estruturaEstavel: string;
  necessidadeReconstrucao: string;

  numeroComodos: string = '0';
  numeroMoradoresPorComodo: string = '0';

  numeroBanheiros: string = '0';

  materialParedeExterna: string[] = [];
  materialParedeExternaTexto: string;
  condicoesParede: string;

  materialPiso: string[] = [];
  materialPisoTexto: string;
  condicoesPiso: string;

  materialInstalacaoEletrica: string[] = [];
  materialInstalacaoEletricaTexto: string;
  condicoesInstalacaoEletrica: string;

  esgotoSanitario: string[] = [];
  esgotoSanitarioTexto: string;
  condicoesEsgotoSanitario: string;

  mostrarOutrosMaterialParedeExterna = false;
  mostrarOutrosMaterialPiso = false;
  mostrarOutrosMaterialInstalacaoEletrica = false;
  mostrarOutrosEsgotoSanitario = false;


}
