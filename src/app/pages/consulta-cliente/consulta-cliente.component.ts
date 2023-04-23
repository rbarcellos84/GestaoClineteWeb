import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment'; //importando as variaves globais
import { HttpClient } from '@angular/common/http'; //importando a biblioteca para a realização do ftp

@Component({
  selector: 'app-consulta-cliente',
  templateUrl: './consulta-cliente.component.html',
  styleUrls: ['./consulta-cliente.component.css']
})
export class ConsultaClienteComponent implements OnInit {
  //criar variavel global para guardar a lista de objetos fornecido pela consulta - API
  listaClientes: any[] = [];
  mensagem_registro: string = '';

  constructor(
    //declara o inicializa a classe HttpClient
    private httpClient: HttpClient) {
  }

  //metodo executado antes do componente abrir/renderizar
  ngOnInit(): void {
    //realizar a chamada da consulta API para realizar a consulta sem parametros
    this.httpClient.get(environment.API_URL + "api/Cliente")
      .subscribe(
        (data) => {
          this.listaClientes = data as any[];
        }
      )
  }

  //funcção para excluir o cliente
  onDelete(idCliente: String): void {
    if (window.confirm('Você realmente deseja excluir o contato selecionado?')) {
      this.httpClient.delete(environment.API_URL + "api/Cliente/" + idCliente)
        .subscribe(
          (data: any) => {
            alert(data.mensage);
            this.ngOnInit();
          }
        )
    }
  }
}
