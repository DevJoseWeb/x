import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { Pessoa } from './pessoa-model';

@Injectable()
export class PessoaService {

  pessoasCollection: AngularFirestoreCollection<Pessoa>;
  pessoasCollection2: AngularFirestoreCollection<Pessoa>;
  pessoaDocument:   AngularFirestoreDocument<Pessoa>;

  constructor(private afs: AngularFirestore, private afs2: AngularFirestore) {
    this.pessoasCollection = this.afs.collection('pessoas', (ref) => ref.orderBy('datacadastro', 'desc').limit(1));
    this.pessoasCollection2 = this.afs2.collection('pessoas', (ref) => ref.orderBy('datacadastro', 'desc').limit(10));
  }

  getData(): Observable<Pessoa[]> {
    return this.pessoasCollection.valueChanges();
  }
  getData2(): Observable<Pessoa[]> {
    return this.pessoasCollection2.valueChanges();
  }

  getSnapshot(): Observable<Pessoa[]> {
    // ['added', 'modified', 'removed']
    return this.pessoasCollection.snapshotChanges().map((actions) => {
      return actions.map((a) => {
        const data = a.payload.doc.data() as Pessoa;
        return {
            id: a.payload.doc.id,
            nome: data.nome, cpf: data.cpf,
            email: data.email, endereco: data.endereco,
            n: data.n, cep: data.cep, bairro: data.bairro,
            cidade: data.cidade, datacadastro: data.datacadastro};
          });
        });
      }

      getSnapshot2(): Observable<Pessoa[]> {
        // ['added', 'modified', 'removed']
        return this.pessoasCollection2.snapshotChanges().map((actions) => {
          return actions.map((a) => {
            const data = a.payload.doc.data() as Pessoa;
            return {
                id: a.payload.doc.id,
                nome: data.nome, cpf: data.cpf,
                email: data.email, endereco: data.endereco,
                n: data.n, cep: data.cep, bairro: data.bairro,
                cidade: data.cidade, datacadastro: data.datacadastro};
              });
            });
          }


    getPessoaTodos() {
        return this.afs2.doc<Pessoa>(`pessoas/`);
    }

    getPessoa(id: string) {
        return this.afs.doc<Pessoa>(`pessoas/${id}`);
    }

    getPessoaNome(nome: string) {
      return this.afs.doc<Pessoa>(`pessoas/${nome}`);
    }

    getPessoaCpf(cpf: string) {
      return this.afs.doc<Pessoa>(`pessoas/${cpf}`);
    }

    getPessoaCep(cep: string) {
      return this.afs.doc<Pessoa>(`pessoas/${cep}`);
    }

    create(nome: string, cpf: string, email: string,
      endereco: string, cep: string, n: string, bairro: string, cidade: string) {
      const pessoa = {
        nome, cpf, email, endereco, cep, n, bairro, cidade,
        datacadastro: new Date().getTime()
      };
      return this.pessoasCollection.add(pessoa);
    }

    updatePessoa(id: string, data: Partial<Pessoa>) {
      return this.getPessoa(id).update(data);
    }

    deletePessoa(id: string) {
      return this.getPessoa(id).delete();
    }
}
