import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import { Login } from 'src/app/models/login.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-primeiro-acesso',
  templateUrl: './primeiro-acesso.component.html',
  styleUrls: ['./primeiro-acesso.component.css']
})
export class PrimeiroAcessoComponent implements OnInit {

  public form: FormGroup;

  cpf: string = "";
  permissaoAcesso: boolean = false;


  constructor(private loginService: LoginService,
    private builder: FormBuilder) {
      this.form = this.builder.group({
        cpf: ['', Validators.required],
      });
    }

  ngOnInit(): void {
    this.form = this.builder.group({
      cpf: ['', Validators.required],
    });
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
