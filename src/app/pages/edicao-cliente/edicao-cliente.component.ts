import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment'; //importando as variaves globais
import { HttpClient } from '@angular/common/http'; //importando a biblioteca para a realização do ftp
import { ActivatedRoute } from '@angular/router'; //ativar os parametros passados pela url
import { formatDate } from '@angular/common'; // formatar data

@Component({
  selector: 'app-edicao-cliente',
  templateUrl: './edicao-cliente.component.html',
  styleUrls: ['./edicao-cliente.component.css']
})

export class EdicaoClienteComponent implements OnInit {
  //criando uma variavel de retorno para api
  mensagem_edicao: string = '';

  constructor(
    //declara o inicializa a classe HttpClient
    private httpClient : HttpClient,
    private activatedRoute : ActivatedRoute
  ) { }
  //metodo executado antes do componente abrir/renderizar
  ngOnInit(): void {
    //realizar a chamada da consulta API para realizar a consulta com parametros
    var idCliente = this.activatedRoute.snapshot.paramMap.get('idCliente') as string;
    this.httpClient.get(environment.API_URL + "api/Cliente/" + idCliente)
    .subscribe(
      (data: any) => {
        //preencher os campos do formulario com os dados da API
        this.fromEdicao.patchValue(data);
        //formatando o campo data
        this.fromEdicao.controls['dataNascimento'].setValue(formatDate(data.dataNascimento as Date, 'yyyy-MM-dd', 'en-US'));
      }
    )
  }

  fromEdicao = new FormGroup({
    idCliente: new FormControl(),
    nome: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(200)]),
    cpf: new FormControl(null, [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
    telefone: new FormControl(null, [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
    email: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(150)]),
    profissao: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(50)]),
    dataNascimento: new FormControl('', [Validators.required]),
    logradouro: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(150)]),
    numero: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(8)]),
    bairro: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(80)]),
    municipio: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(80)]),
    estado: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(3)]),
    comoConheceu: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(500)]),
    observacao: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(500)])
  });
  
  //funcção utilizada para exibir os erros de validação dos campos na pagina html
  get form(): any {
    return this.fromEdicao.controls;
  };

  //função para executar a chamada da API que irá editar o formulario
  onSubmit() : void {
    //teste
    //console.log(this.fromCadastro.value);

    //chamada da api
    this.httpClient.put(environment.API_URL + "api/Cliente",this.fromEdicao.value)
    .subscribe(
      //subscribe captura a resposta da api
      (data: any) => {
        this.mensagem_edicao = data.mensage;
        alert(this.mensagem_edicao);
      }
    );
  }
}