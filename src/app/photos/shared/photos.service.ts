import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { Photos } from './photos';

interface NewPhotos {
  text: string;
  face: string;
  landmarks: string;
  web: string;
}

@Injectable()
export class PhotosService {

  photossCollection: AngularFirestoreCollection<Photos>;
  photosDocument:   AngularFirestoreDocument<Photos>;

  constructor(private afs: AngularFirestore) {
    this.photossCollection = this.afs.collection('photoss', (ref) => ref.orderBy('id', 'desc').limit(10));
  }

  getData(): Observable<Photos[]> {
    return this.photossCollection.valueChanges();
  }

  getSnapshot(): Observable<Photos[]> {
    return this.photossCollection.snapshotChanges().map((actions) => {
      return actions.map((a) => {
        const data = a.payload.doc.data() as Photos;
        return {
            id: a.payload.doc.id,
            faces: data.faces,
            text: data.text,
            landmarks: data.landmarks,
            web: data.web
            };
          });
        });
      }

  create(faces: string, text: string, landmarks: string, web: string) {
      const photos = {
        faces, text, landmarks, web
      };
      return this.photossCollection.add(photos);
  }
}
