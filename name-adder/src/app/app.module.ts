import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AddNameComponent } from './add-name/add-name.component';
import { ShowNamesComponent } from './add-name/show-names/show-names.component';
import { RecentNameComponent } from './recent-name/recent-name.component';
import { GameRateComponent } from './game-rate/game-rate.component';
import { GameListingComponent } from './game-listing/game-listing.component';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { NamesListService } from './services/namesList.service';

const appRoutes: Routes = [
  {  //Home Component
    path: '', 
    component: HomeComponent,
    children: [
      {path: 'names', component: AddNameComponent},
      {path: 'games', component: GameRateComponent},
      {path: '', component: LandingComponent}
    ]
  },  
  {path: 'not-found',component: ErrorPageComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    AddNameComponent,
    ShowNamesComponent,
    RecentNameComponent,
    GameRateComponent,
    GameListingComponent,
    ErrorPageComponent,
    HomeComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  providers: [NamesListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
