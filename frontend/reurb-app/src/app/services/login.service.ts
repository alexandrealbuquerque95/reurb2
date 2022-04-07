import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tutorial } from '../models/tutorial.model';

const baseUrl = 'http://localhost:8080/api/';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  findByCPF(cpf: any): Observable<boolean> {
    return this.http.get<boolean>(`${baseUrl}verificarPermissaoCadastro?cpf=${cpf}`);
  }
}
