import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';

import { AngularFireDatabaseModule } from 'angularfire2/database';

import { PhotosService } from '../shared/photos.service';
import { PhotosListComponent } from '../photos-list/photos-list.component';

const routes: Routes = [
  { path: '', component: PhotosListComponent },
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AngularFireDatabaseModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    PhotosListComponent,
     ],
  providers: [
    PhotosService,
  ],
})
export class PhotosModule { }
