import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DadosPessoais } from '../models/dados-pessoais.model';

const baseUrl = 'http://localhost:8080/api/dados_pessoais';
//const baseUrl = 'http://ec2-3-89-8-186.compute-1.amazonaws.com:8080/api/dados_pessoais';


@Injectable({
  providedIn: 'root'
})
export class DadosPessoaisService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<DadosPessoais[]> {
    return this.http.get<DadosPessoais[]>(baseUrl);
  }

  get(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<DadosPessoais[]> {
    return this.http.get<DadosPessoais[]>(`${baseUrl}?title=${title}`);
  }

  uploadArquivo(data: any, id: number): Observable<any>
  {
    return this.http.post(baseUrl + '/arquivoPessoal/'+ id , data);
  }

}
