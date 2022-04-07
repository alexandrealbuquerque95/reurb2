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

      this.loginService.findByCPF(this.cpf)
        .subscribe(
          data => {
            this.permissaoAcesso = data;
            console.log(this.permissaoAcesso);
          },
          error => {
            console.log(error);
          });
    }
  }

}
