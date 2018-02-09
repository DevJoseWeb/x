import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { Layout } from './layout-model';

@Injectable()
export class LayoutService {

  layoutsCollection: AngularFirestoreCollection<Layout>;
  layoutDocument:   AngularFirestoreDocument<Layout>;

  constructor(private afs: AngularFirestore) {
    this.layoutsCollection = this.afs.collection('layouts', (ref) => ref.orderBy('datacadastro', 'desc').limit(50));
  }

  getData(): Observable<Layout[]> {
    return this.layoutsCollection.valueChanges();
  }
   getSnapshot(): Observable<Layout[]> {
    // ['added', 'modified', 'removed']
    return this.layoutsCollection.snapshotChanges().map((actions) => {
      return actions.map((a) => {
        const data = a.payload.doc.data() as Layout;
        return {
            id: a.payload.doc.id,
            descricao: data.descricao, datacadastro: data.datacadastro};
          });
        });
      }

    getLayout(id: string) {
        return this.afs.doc<Layout>(`layouts/${id}`);
    }

    getLayoutNome(descricao: string) {
      return this.afs.doc<Layout>(`layouts/${descricao}`);
    }

    create(descricao: string) {
      const layout = {
        descricao, datacadastro: new Date().getTime(),
      };
      return this.layoutsCollection.add(layout);
    }

    updateLayout(id: string, data: Partial<Layout>) {
      return this.getLayout(id).update(data);
    }

    deleteLayout(id: string) {
      return this.getLayout(id).delete();
    }
}
