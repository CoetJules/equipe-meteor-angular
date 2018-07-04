import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { AccountsModule } from 'angular2-meteor-accounts-ui';

import { AppComponent } from './app.component';
import { ImcComponent } from './imc/imc.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { GestionEquipeComponent } from './gestion-equipe/gestion-equipe.component';
import { EquipeComponent } from './gestion-equipe/equipe/equipe.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AccountsModule,
    RouterModule.forRoot([
      {
        path: 'todoList',
        component: TodoListComponent
      },
      {
        path: 'imc',
        component: ImcComponent
      },
      {
        path: 'gestionEquipe',
        component: GestionEquipeComponent,
        canActivate: ['canActivateForLoggedIn'],
      },
      {
        path: 'todoAdd',
        component: TodoAddComponent
      },
      // Home Page
      {
        path: '',
        component: LoginComponent,
        pathMatch: 'full'
      },
      // 404 Page
      {
        path: '**',
        component: PageNotFoundComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    ImcComponent,
    GestionEquipeComponent,
    EquipeComponent,
    TodoAddComponent,
    TodoListComponent,
    PageNotFoundComponent
  ],
  providers: [
    {
      provide: 'canActivateForLoggedIn',
      useValue: () => !!Meteor.userId()
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
