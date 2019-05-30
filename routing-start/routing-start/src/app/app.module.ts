import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import {Routes, RouterModule} from '@angular/router';  //needed for routes

const appRoutes: Routes = [
  { // full path is localhost:4200/users
    path: 'users',
    component: UsersComponent, children: [
      {
        path: ':id/:name',  //with colon, allows for dynamic querying
        component: UserComponent
      }
    ] //which component gets loaded when route is hit
  },
  {
    path: '',  //home page
    component: HomeComponent
  },
  {
    path: 'servers',
    component: ServersComponent,  //child routing
    children:[
      {
        path: ':id',
        component: ServerComponent
      },
      {
        path: ':id/edit',
        component: EditServerComponent
      },
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)  //needed for routes, argument from above declaration
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
