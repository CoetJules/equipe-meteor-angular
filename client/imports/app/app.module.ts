import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRouter } from './app.router';
//import { HomeModule } from './home/home.module';
//import { CoreModule } from './core/core.module';
import {NavbarComponent} from "./core/navbar.component";
import {ToolbarComponent} from "./core/toolbar.component";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule, AppRouter,
    RouterModule.forRoot([

      {
        path: '',
        component: NavbarComponent,
      }
      // 404 Page
      {
        path: '**',
        component: PageNotFoundComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ToolbarComponent,
    NavbarComponent,
//    HomeModule,
//    CoreModule,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
