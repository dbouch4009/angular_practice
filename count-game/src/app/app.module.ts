import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GamecontrolComponent } from './gamecontrol/gamecontrol.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { BoyboxComponent } from './boybox/boybox.component';
import { GirlboxComponent } from './girlbox/girlbox.component';

@NgModule({
  declarations: [
    AppComponent,
    GamecontrolComponent,
    OddComponent,
    EvenComponent,
    BoyboxComponent,
    GirlboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
