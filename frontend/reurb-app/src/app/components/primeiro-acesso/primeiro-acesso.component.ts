import { Component, OnInit } from '@angular/core';

import { Login } from 'src/app/models/login.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-primeiro-acesso',
  templateUrl: './primeiro-acesso.component.html',
  styleUrls: ['./primeiro-acesso.component.css']
})
export class PrimeiroAcessoComponent implements OnInit {

  cpf: string = "";
  permissaoAcesso: boolean = false;
  validouCPF: boolean = true;
  mensagemCPF: string = '';

  constructor(private loginService: LoginService) {

  }

  ngOnInit(): void {
  }

  handleKeyUp(e: any){
    if(e.keyCode === 13){
       this.continuar();
    }
 }

  continuar(): void
  {
    if(!!this.cpf)
    {
      this.permissaoAcesso = false;

      if(!(this.cpf.length == 11))
      {
        this.validouCPF = false;
        this.mensagemCPF = 'Preencha um CPF válido'
        return;
      }

      this.validouCPF = true;

      this.loginService.findByCPF(this.cpf)
        .subscribe(
          data => {
            this.permissaoAcesso = data;
            console.log(this.permissaoAcesso);

            if(!this.permissaoAcesso)
            {
              this.validouCPF = false;
              this.mensagemCPF = 'Você não tem permissão para realizar cadastro. Em caso de dúvidas entre em contato conosco.';
            }
          },
          error => {
            console.log(error);
          });
    }
    else
    {
      this.validouCPF = false;
      this.mensagemCPF = 'Preencha o CPF'
    }
  }

}
