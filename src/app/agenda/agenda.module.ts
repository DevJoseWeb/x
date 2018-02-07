import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { AgendaService } from './agenda.service';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AgendasListComponent } from './agendas-list/agendas-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AngularFirestoreModule.enablePersistence(),
  ],
  declarations: [
    AgendasListComponent],
  providers: [AgendaService],
})
export class AgendaModule { }
