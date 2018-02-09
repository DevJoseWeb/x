import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserLoginComponent } from './ui/user-login/user-login.component';
import { ItemsListComponent } from './items/items-list/items-list.component';
import { ReadmePageComponent } from './ui/readme-page/readme-page.component';
import { NotesListComponent } from './notes/notes-list/notes-list.component';
import { PessoasListComponent } from './pessoa/pessoas-list/pessoas-list.component';
//import { PessoasTodosListComponent } from './pessoa/pessoas-list/pessoas-todos-list.component';
import { AgendasListComponent } from './agenda/agendas-list/agendas-list.component';
import { PhotosListComponent } from './photos/photos-list/photos-list.component';

import { AuthGuard } from './core/auth.guard';
import { CoreModule } from './core/core.module';

const routes: Routes = [
  { path: '', component: ReadmePageComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'items', component: ItemsListComponent, canActivate: [AuthGuard] },
  { path: 'notes', component: NotesListComponent,  canActivate: [AuthGuard] },
  { path: 'pessoas', component: PessoasListComponent,  canActivate: [AuthGuard] },
  { path: 'photos', component: PhotosListComponent,  canActivate: [AuthGuard] },
  //{ path: 'pessoasTodos', component: PessoasTodosListComponent,  canActivate: [AuthGuard] },
  { path: 'agendas', component: AgendasListComponent,  canActivate: [AuthGuard] },
  // uploads are lazy loaded
  { path: 'uploads', loadChildren: './uploads/shared/upload.module#UploadModule', canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule { }
