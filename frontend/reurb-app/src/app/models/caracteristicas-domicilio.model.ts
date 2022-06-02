export class CaracteristicasDomicilio {
  id: number;

  estruturaEstavel: string = '0';
  necessidadeReconstrucao: string = '0';

  numeroComodos: string = '0';
  numeroMoradoresPorComodo: string = '0';

  numeroBanheiros: string = '0';

  materialParedeExternaArray: string[] = [];
  materialParedeExterna: string = '';
  materialParedeExternaTexto: string;
  condicoesParede: string = 'Adequadas';

  materialPisoArray: string[] = [];
  materialPiso: string = '';
  materialPisoTexto: string;
  condicoesPiso: string = 'Adequadas';

  materialInstalacaoEletricaArray: string[] = [];
  materialInstalacaoEletrica: string = '';
  materialInstalacaoEletricaTexto: string;
  condicoesInstalacaoEletrica: string = 'Adequadas';

  esgotoSanitarioArray: string[] = [];
  esgotoSanitario: string = '';
  esgotoSanitarioTexto: string;
  condicoesEsgotoSanitario: string = 'Adequadas';

  mostrarOutrosMaterialParedeExterna = false;
  mostrarOutrosMaterialPiso = false;
  mostrarOutrosMaterialInstalacaoEletrica = false;
  mostrarOutrosEsgotoSanitario = false;


}
