import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrimeiroAcessoComponent } from './components/primeiro-acesso/primeiro-acesso.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { FormularioCadastroComponent } from './components/formulario-cadastro/formulario-cadastro.component';
import { VisualizarMapaComponent } from './components/visualizacao-mapa/visualizacao-mapa.component'

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';

const routes: Routes = [
  //{ path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'tutorials', component: LoginComponent },
  { path: 'tutorials/:id', component: TutorialDetailsComponent },
  { path: 'add', component: AddTutorialComponent },

  { path: 'primeiro-acesso', component: PrimeiroAcessoComponent },
  { path: 'formulario-cadastro/:cpf', component: FormularioCadastroComponent },
  { path: 'visualizacao-mapa', component: VisualizarMapaComponent },

  //Login:
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
