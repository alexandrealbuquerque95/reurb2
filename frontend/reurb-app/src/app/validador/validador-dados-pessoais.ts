import { DadosPessoais } from 'src/app/models/dados-pessoais.model';


export class ValidadorDadosPessoais {

  dadosPessoais: DadosPessoais;

  cpf: boolean = true;
  cpfMensagem: string = 'Preencha o campo CPF';
  nome: boolean = true;
  nomeMensagem: string = 'Preencha o campo Nome';

  rg: boolean = true;
  orgaoEmissorRG: boolean = true;
  ufEmissorRG: boolean = true;

  dataNascimento: boolean = true;
  telefone: boolean = true;
  sexo: boolean = true;

  estadoCivil: boolean = true;
  nomeConjuge: boolean = true;

  documentoAnexo: boolean = true;

  validouDados: boolean = true;

  validarDados(dadosPessoais: DadosPessoais): ValidadorDadosPessoais
  {
    this.validouDados = true;
    if(dadosPessoais.cpf == undefined || dadosPessoais.cpf == '')
    {
      this.cpf = false;
      this.validouDados = false;
    }
    else
    {
      this.cpf = true;
    }

    if(dadosPessoais.nome == undefined || dadosPessoais.nome == '')
    {
      this.nome = false;
      this.validouDados = false;
    }
    else
    {
      this.nome = true;
    }

    return this;
  }
}
