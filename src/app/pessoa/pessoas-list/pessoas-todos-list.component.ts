import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PessoaService } from '../pessoa.service';
import { Pessoa } from '../pessoa-model';

@Component({
  selector: 'pessoas-todos-list',
  templateUrl: './pessoas-todos-list.component.html',
  styleUrls: ['./pessoas-list.component.scss'],
})
export class PessoasTodosListComponent implements OnInit {

  pessoas2: Observable<Pessoa[]>;

  nome: string;
  cpf: string;
  email: string;
  endereco: string;
  n: string;
  cep: string;
  bairro: string;
  cidade: string;
  showSpinner = true;

  constructor(private pessoaService: PessoaService) { }

  ngOnInit() {
     this.pessoas2 = this.pessoaService.getSnapshot2();
     this.showSpinner = false;
     }

  createPessoa() {
    this.pessoaService.create(
    this.nome, this.cpf, this.email,
    this.endereco, this.n, this.cep,
    this.bairro, this.cidade);
    this.nome = '';
    this.cpf  = '';
    this.email  = '';
    this.endereco  = '';
    this.n  = '';
    this.cep  = '';
    this.bairro  = '';
    this.cidade  = '';
  }
}
