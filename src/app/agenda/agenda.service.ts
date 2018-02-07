import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { Agenda } from './agenda-model';

interface NewAgenda {
  players: string;
  inicio: string;
  termino: string;
  layout: string;
  sequencia: string;
  prioridade: string;
  repeticoes: string;
  acada: string;
  ate: string;
  status: string;
  datacadastro: number;
}

@Injectable()
export class AgendaService {

  agendasCollection: AngularFirestoreCollection<Agenda>;
  agendaDocument:   AngularFirestoreDocument<Agenda>;

  constructor(private afs: AngularFirestore) {
    this.agendasCollection = this.afs.collection('agendas', (ref) => ref.orderBy('datacadastro', 'desc').limit(1));
  }

  getData(): Observable<Agenda[]> {
    return this.agendasCollection.valueChanges();
  }

  getSnapshot(): Observable<Agenda[]> {
    return this.agendasCollection.snapshotChanges().map((actions) => {
      return actions.map((a) => {
        const data = a.payload.doc.data() as Agenda;
        return {
          id: a.payload.doc.id,
          players: data.players,
          inicio: data.inicio,
          termino: data.termino,
          layout: data.layout,
          sequencia: data.sequencia,
          prioridade: data.prioridade,
          repeticoes: data.repeticoes,
          acada: data.acada,
          ate: data.ate,
          status: data.status,
          datacadastro: data.datacadastro};
        });
      });
    }

  getAgenda(id: string) {
        return this.afs.doc<Agenda>(`agendas/${id}`);
  }
  create(players: string, inicio: string, termino: string,
     layout: string, sequencia: string,
     prioridade: string, repeticoes: string,
     acada: string, ate: string
    ) {
    const agenda = {
      players, inicio, termino, layout,
      sequencia, prioridade,repeticoes, acada, ate, status: 'Ativo' ,
      datacadastro: new Date().getTime(),
    };
    return this.agendasCollection.add(agenda);
  }

  updateAgenda(id: string, data: Partial<Agenda>) {
    return this.getAgenda(id).update(data);
  }

  deleteAgenda(id: string) {
    return this.getAgenda(id).delete();
  }
}
