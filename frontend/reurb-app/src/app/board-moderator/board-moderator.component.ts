import { Component, OnInit } from '@angular/core';

import { DadosCadastroPessoal } from 'src/app/models/cadastros-pessoas.model'
import { DadosPessoais } from 'src/app/models/dados-pessoais.model';
import { DadosPessoaisService } from 'src/app/services/dados-pessoais.service';
import { Observable } from 'rxjs';
import { ExcelService } from 'src/app/services/excel.service';


@Component({
  selector: 'app-board-moderator',
  templateUrl: './board-moderator.component.html',
  styleUrls: ['./board-moderator.component.css']
})
export class BoardModeratorComponent implements OnInit {

  constructor(private dadosPessoaisService: DadosPessoaisService, private excelService:ExcelService) { }

  filtroCPF: string = '';
  filtroNome: string = '';
  filtroSituacao: number = 0;
  filtroEndereco: string = '';
  filtroCep: number;
  filtroBairro: string = '';
  filtroMunicipio: string = '';
  filtroUf: string = '';

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
            this.cadastroPessoal.Nome = dado.nome;
            this.cadastroPessoal.CPF = dado.cpf;
            this.cadastroPessoal.Endereco_Imovel = dado.dadosImovel.enderecoImovel;
            this.cadastroPessoal.CEP_Imovel = dado.dadosImovel.cepImovel;
            if(dado.dadosImovel.ufImovel != undefined && dado.dadosImovel.ufImovel != '0')
            {
              this.cadastroPessoal.UF_Imovel = dado.dadosImovel.ufImovel;
            }
            this.cadastroPessoal.Municipio_Imovel = dado.dadosImovel.municipioImovel;
            this.cadastroPessoal.Bairro_Imovel = dado.dadosImovel.bairroImovel;

            if(dado.situacaoCadastro != undefined)
            {
              if(dado.situacaoCadastro == 1)
              {
                this.cadastroPessoal.Situacao_Cadastro = 'Envio Pendente';
              }
              if(dado.situacaoCadastro == 2)
              {
                this.cadastroPessoal.Situacao_Cadastro = 'Dados Enviados';
              }
              if(dado.situacaoCadastro == 3)
              {
                this.cadastroPessoal.Situacao_Cadastro = 'Regularização Concluída';
              }
            }

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
    //console.log(this.filtroCPF);
    //console.log(this.filtroNome);
    //console.log(this.filtroNome);

    //params.set(this.filtroCPF);
    //params.append(this.filtroNome);

    this.dadosPessoaisService.pesquisar(this.filtroCPF, this.filtroNome, this.filtroSituacao, this.filtroEndereco,
      this.filtroCep, this.filtroBairro, this.filtroMunicipio , this.filtroUf)
    .subscribe
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
            this.cadastroPessoal.Nome = dado.nome;
            this.cadastroPessoal.CPF = dado.cpf;
            this.cadastroPessoal.Endereco_Imovel = dado.dadosImovel.enderecoImovel;
            this.cadastroPessoal.CEP_Imovel = dado.dadosImovel.cepImovel;

            if(dado.dadosImovel.ufImovel != undefined && dado.dadosImovel.ufImovel != '0')
            {
              this.cadastroPessoal.UF_Imovel = dado.dadosImovel.ufImovel;
            }
            this.cadastroPessoal.Municipio_Imovel = dado.dadosImovel.municipioImovel;
            this.cadastroPessoal.Bairro_Imovel = dado.dadosImovel.bairroImovel;

            if(dado.situacaoCadastro != undefined)
            {
              if(dado.situacaoCadastro == 1)
              {
                this.cadastroPessoal.Situacao_Cadastro = 'Envio Pendente';
              }
              if(dado.situacaoCadastro == 2)
              {
                this.cadastroPessoal.Situacao_Cadastro = 'Dados Enviados';
              }
              if(dado.situacaoCadastro == 3)
              {
                this.cadastroPessoal.Situacao_Cadastro = 'Regularização Concluída';
              }
            }

            this.cadastrosPessoais.push(this.cadastroPessoal);
          });
        }
      },

      error => {
        console.log(error);
      }
    );
  }

  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(this.cadastrosPessoais, 'dados_cadastrais');
  }

}
