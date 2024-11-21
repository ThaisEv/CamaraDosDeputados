import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Deputado } from './deputado';

@Injectable({
  providedIn: 'root'
})
export class DeputadoServiceService {
  private API = 'https://dadosabertos.camara.leg.br/api/v2/deputados?';
  deputados: Deputado[] = [];

  constructor(private http: HttpClient) {
    this.http.get(`${this.API}nome=ana&ordem=ASC&ordenarPor=nome`).subscribe(
      res => {
        console.log(res);
      }
    )
  }

  buscarDeputadoPorTitulo(nome: string): Observable<any> {
    return this.http.get(`${this.API}nome=${nome}&ordem=ASC&ordenarPor=nome`);
  }

  buscar(nome: string) {
    this.buscarDeputadoPorTitulo(nome).subscribe(
      res => {
        this.deputados = res.dados;
      }
    );
    console.log(this.deputados);
  }
}
