import { Component, OnInit } from '@angular/core';

import { Login } from 'src/app/models/login.model';
import { LoginService } from 'src/app/services/login.service';
import { ActivatedRoute, Router } from '@angular/router';


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

  inputBorderStyle: string = 'none';

  constructor(private loginService: LoginService, private router: Router) {

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
        this.inputBorderStyle = 'red';
        return;
      }

      this.validouCPF = true;
      this.inputBorderStyle = '';

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
            else
            {
              this.router.navigate(['/formulario-cadastro', this.cpf]);
            }
          },
          error => {
            console.log(error);
          });
    }
    else
    {
      this.validouCPF = false;
      this.mensagemCPF = 'Preencha o CPF';
      this.inputBorderStyle = 'red';
    }
  }

}
