import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { AngularFirestoreModule } from 'angularfire2/firestore';

import { PessoaService } from './pessoa.service';
import { PessoasListComponent } from './pessoas-list/pessoas-list.component';
import { PessoasTodosListComponent } from './pessoas-list/pessoas-todos-list.component';
import { PessoaFormComponent } from './pessoa-form/pessoa-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AngularFirestoreModule.enablePersistence(),
  ],
  declarations: [
  PessoasListComponent,
  PessoaFormComponent,
  PessoasTodosListComponent,
  ],
  providers: [PessoaService],
})
export class PessoaModule { }
