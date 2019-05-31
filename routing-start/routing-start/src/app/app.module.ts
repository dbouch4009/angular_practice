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
import {Routes, RouterModule} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';  //needed for routes
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './servers/server/server-resolver.service';

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
    // canActivate:[AuthGuardService],  //applying auth guards
    canActivateChild: [AuthGuardService],
    component: ServersComponent,  //child routing
    children:[
      {
        path: ':id',
        component: ServerComponent,
        resolve: {server: ServerResolver}  // returns data
      },
      {
        path: ':id/edit',
        component: EditServerComponent,
        canDeactivate: [CanDeactivateGuard]
      },
    ]
  },
  // { path: 'not-found', component: PageNotFoundComponent},
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'ur page is not here'}},  //data passed to component
  { path: '**', redirectTo: '/not-found'},  //wildcard route, always at the end
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PageNotFoundComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, {useHash: true})  //needed for routes, argument from above declaration
  ],
  providers: [ServersService, AuthService, AuthGuardService, CanDeactivateGuard, ServerResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
