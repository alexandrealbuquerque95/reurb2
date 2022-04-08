import { Component, OnInit } from '@angular/core';

import { Login } from 'src/app/models/login.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-formulario-cadastro.component',
  templateUrl: './formulario-cadastro.component.html',
  styleUrls: ['./formulario-cadastro.component.css']
})
export class FormularioCadastroComponent implements OnInit {

  cpf: string = "";
  permissaoAcesso: boolean = false;
  validouCPF: boolean = true;
  mensagemCPF: string = '';

  inputBorderStyle: string = 'none';

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

  }

}
