import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login.model';

import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-primeiro-acesso',
  templateUrl: './primeiro-acesso.component.html',
  styleUrls: ['./primeiro-acesso.component.css']
})
export class PrimeiroAcessoComponent implements OnInit {

  login: Login = {};
  cpf: string = "";
  senha: string = "";

  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
    //this.retrieveTutorials();
  }

  logar(): void
  {

  }

  redirecionarPrimeiroCadastro(): void
  {

  }



}
