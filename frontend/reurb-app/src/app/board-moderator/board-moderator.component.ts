import { Component, OnInit } from '@angular/core';

import { DadosCadastroPessoal } from 'src/app/models/cadastros-pessoas.model'
import { DadosPessoais } from 'src/app/models/dados-pessoais.model';
import { DadosPessoaisService } from 'src/app/services/dados-pessoais.service';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-board-moderator',
  templateUrl: './board-moderator.component.html',
  styleUrls: ['./board-moderator.component.css']
})
export class BoardModeratorComponent implements OnInit {

  constructor(private dadosPessoaisService: DadosPessoaisService) { }

  filtroCPF: string = '';
  filtroNome: string = '';
  filtroSituacao: number = 0;

  //let params = new HttpParams();

  dadosPessoais: DadosPessoais[] = [];

  cadastrosPessoais: DadosCadastroPessoal[] = [];
  cadastroPessoal: DadosCadastroPessoal = new DadosCadastroPessoal();

  ngOnInit(): void {
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
            this.cadastroPessoal.situacaoCadastro = dado.situacaoCadastro;
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

  pesquisar(): void
  {
    console.log(this.filtroCPF);
    console.log(this.filtroNome);
    console.log(this.filtroNome);

    //params.set(this.filtroCPF);
    //params.append(this.filtroNome);

    this.dadosPessoaisService.pesquisar(this.filtroCPF, this.filtroNome, this.filtroSituacao).subscribe
    (
      data => {
        console.log(data);
        this.dadosPessoais = data;
        this.cadastrosPessoais = [];

        if(this.dadosPessoais != undefined)
        {
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
            this.cadastroPessoal.situacaoCadastro = dado.situacaoCadastro;
            this.cadastrosPessoais.push(this.cadastroPessoal);
          });
        }
      },

      error => {
        console.log(error);
      }
    );
  }

}
