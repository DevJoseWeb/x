import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { AngularFirestoreModule } from 'angularfire2/firestore';

import { LayoutsListComponent } from './layouts-list/layouts-list.component';
import { LayoutService } from './layout.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AngularFirestoreModule.enablePersistence(),
  ],
  declarations: [LayoutsListComponent],
  providers: [LayoutService],
})
export class LayoutModule { }
