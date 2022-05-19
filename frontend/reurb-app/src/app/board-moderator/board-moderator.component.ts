import { Component, OnInit } from '@angular/core';

import { DadosCadastroPessoal } from 'src/app/models/cadastros-pessoas.model'
import { DadosPessoais } from 'src/app/models/dados-pessoais.model';
import { DadosPessoaisService } from 'src/app/services/dados-pessoais.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-board-moderator',
  templateUrl: './board-moderator.component.html',
  styleUrls: ['./board-moderator.component.css']
})
export class BoardModeratorComponent implements OnInit {

  constructor(private dadosPessoaisService: DadosPessoaisService) { }

  dadosPessoais: DadosPessoais[] = [];

  cadastrosPessoais: DadosCadastroPessoal[] = [];
  cadastroPessoal: DadosCadastroPessoal = new DadosCadastroPessoal();

  ngOnInit(): void {
    this.cadastroPessoal.nome = 'João Carlos da Silva';
    this.cadastroPessoal.cpf = '123.456.789-50';
    this.cadastroPessoal.enderecoImovel = 'Rua João Carlos, 123';
    this.cadastroPessoal.cepImovel = 72110330;
    this.cadastroPessoal.ufImovel = 'DF';
    this.cadastroPessoal.municipioImovel = 'Brasília';
    this.cadastroPessoal.bairroImovel = 'Taguatinga';
    this.cadastroPessoal.situacaoCadastro = 'Cadastro Enviado';
    this.cadastrosPessoais.push(this.cadastroPessoal);

    this.cadastroPessoal = new DadosCadastroPessoal();
    this.cadastroPessoal.nome = 'Maria Joana da Costa';
    this.cadastroPessoal.cpf = '555.233.468-24';
    this.cadastroPessoal.enderecoImovel = 'Rua Antônio Magalhães, 442';
    this.cadastroPessoal.cepImovel = 20115487;
    this.cadastroPessoal.ufImovel = 'GO';
    this.cadastroPessoal.municipioImovel = 'Cidade Ocidental';
    this.cadastroPessoal.bairroImovel = 'Jardim ABC';
    this.cadastroPessoal.situacaoCadastro = 'Regularização Concluída';
    this.cadastrosPessoais.push(this.cadastroPessoal);

    this.cadastroPessoal = new DadosCadastroPessoal();
    this.cadastroPessoal.nome = 'Pedro Paulo Tavares';
    this.cadastroPessoal.cpf = '427.124.413-19';
    this.cadastroPessoal.enderecoImovel = 'QNP 15, Conjunto 22, Casa 10';
    this.cadastroPessoal.cepImovel = 58134842;
    this.cadastroPessoal.ufImovel = 'DF';
    this.cadastroPessoal.municipioImovel = 'Brasília';
    this.cadastroPessoal.bairroImovel = 'Ceilândia';
    this.cadastroPessoal.situacaoCadastro = 'Envio Pendente';
    this.cadastrosPessoais.push(this.cadastroPessoal);

    this.getDadosPessoais();
  }

  public getDadosPessoais(): DadosPessoais[]
  {
    this.dadosPessoaisService.getAll()
      .subscribe(
        data => {
          console.log(data);
          this.dadosPessoais = data;

          this.dadosPessoais.forEach(async dado =>
          {
            this.cadastroPessoal = new DadosCadastroPessoal();
            this.cadastroPessoal.nome = dado.nome;
            this.cadastroPessoal.cpf = dado.cpf;
            this.cadastroPessoal.enderecoImovel = dado.dadosImovel.enderecoImovel;
            this.cadastroPessoal.cepImovel = dado.dadosImovel.cepImovel;
            this.cadastroPessoal.ufImovel = dado.dadosImovel.ufImovel;
            this.cadastroPessoal.municipioImovel = dado.dadosImovel.municipioImovel;
            this.cadastroPessoal.bairroImovel = dado.dadosImovel.bairroImovel;
            this.cadastroPessoal.situacaoCadastro = 'Envio Pendente';
            this.cadastrosPessoais.push(this.cadastroPessoal);
          }
          );

        },
        error => {
          console.log(error);
        });

    //console.log();
    return this.dadosPessoais;
  }

}
