import { IntegranteFamiliar } from 'src/app/models/integrante-familiar.model';

export class ValidadorIntegranteFamiliar {

  integranteFamiliar: IntegranteFamiliar;

  nome: boolean = true;
  nomeMensagem: string = 'Preencha o campo Nome Completo';

  documento: boolean = true;
  documentoMensagem: string = 'Preencha o campo Documento ';

  relacaoComTitular: boolean = true;
  relacaoComTitularMensagem: string = 'Preencha o campo Relação com o titular';

  sexo: boolean = true;
  sexoMensagem: string = 'Preencha o campo Sexo';

  dataNascimento: boolean = true;
  dataNascimentoMensagem: string = 'Preencha o campo Data de nascimento';

  camposInvalidos: string = '';
  validouDados: boolean = true;

  validarDados(integranteFamiliar: IntegranteFamiliar): ValidadorIntegranteFamiliar
  {
    this.camposInvalidos = '';
    this.validouDados = true;

    this.validarNome(integranteFamiliar);
    this.validarDocumento(integranteFamiliar);
    this.validarRelacaoComTitular(integranteFamiliar);
    this.validarSexo(integranteFamiliar);
    this.validarDataNascimento(integranteFamiliar);

    return this;
  }

  adicionarCampoInvalido(campo: string)
  {
    if(this.camposInvalidos == undefined || this.camposInvalidos == '')
    {
      this.camposInvalidos = campo;
    }
    else
    {
      this.camposInvalidos += ', ' + campo;
    }
  }

  validarNome(integranteFamiliar: IntegranteFamiliar)
  {
    if(integranteFamiliar.nome == undefined || integranteFamiliar.nome == '')
    {
      this.nome = false;
      this.validouDados = false;
      this.adicionarCampoInvalido('Nome Completo');
    }
    else
    {
      this.nome = true;
    }
  }

  validarDocumento(integranteFamiliar: IntegranteFamiliar)
  {
    if(integranteFamiliar.documento == undefined || integranteFamiliar.documento == '')
    {
      this.documento = false;
      this.validouDados = false;
      this.adicionarCampoInvalido('Documento');
    }
    else
    {
      this.documento = true;
    }
  }

  validarRelacaoComTitular(integranteFamiliar: IntegranteFamiliar)
  {
    if(integranteFamiliar.relacaoComTitular == undefined || integranteFamiliar.relacaoComTitular == '')
    {
      this.relacaoComTitular = false;
      this.validouDados = false;
      this.adicionarCampoInvalido('Relação com o titular');
    }
    else
    {
      this.relacaoComTitular = true;
    }
  }

  validarSexo(integranteFamiliar: IntegranteFamiliar)
  {
    if(integranteFamiliar.sexo == undefined || integranteFamiliar.sexo == '')
    {
      this.sexo = false;
      this.validouDados = false;
      this.adicionarCampoInvalido('Sexo');
    }
    else
    {
      this.sexo = true;
    }
  }

  validarDataNascimento(integranteFamiliar: IntegranteFamiliar)
  {
    if(integranteFamiliar.dataNascimento == undefined || integranteFamiliar.dataNascimento == '')
    {
      this.dataNascimento = false;
      this.validouDados = false;
      this.adicionarCampoInvalido('Data de nascimento');
    }
    else
    {
      this.dataNascimento = true;
    }
  }

}
