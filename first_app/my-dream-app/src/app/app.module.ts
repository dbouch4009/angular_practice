import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';  //cli generator does this
import { ServersComponent } from './servers/servers.component';
import { TemplateTesterComponent } from './template-tester/template-tester.component';
import { AttributeTesterComponent } from './attribute-tester/attribute-tester.component';
import { JeffHardyComponentComponent } from './jeff-hardy-component/jeff-hardy-component.component';
import { JohnCenaComponentComponent } from './john-cena-component/john-cena-component.component';
import { RasslerListComponentComponent } from './rassler-list-component/rassler-list-component.component';
import { RasslerComponent } from './rassler/rassler.component';  //also include new components here

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,  //cli generator does this
    ServersComponent, TemplateTesterComponent, AttributeTesterComponent, JeffHardyComponentComponent, JohnCenaComponentComponent, RasslerListComponentComponent, RasslerComponent  //include new components here
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
