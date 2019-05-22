import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddNameComponent } from './add-name/add-name.component';
import { ShowNamesComponent } from './show-names/show-names.component';
import { RecentNameComponent } from './recent-name/recent-name.component';

@NgModule({
  declarations: [
    AppComponent,
    AddNameComponent,
    ShowNamesComponent,
    RecentNameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
