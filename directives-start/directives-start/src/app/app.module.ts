import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BasicHighlightDirective } from './directives/basic-highlight.directive';
import { BetterHighlightDirective } from './directives/better-highlight.directive';
import { HoverHighlightDirective } from './directives/hover-highlight.directive';
import { HostBindingDirective } from './directives/host-binding.directive';
import { DirectivePropBindingDirective } from './directives/directive-prop-binding.directive';
import { UnlessDirDirective } from './directives/unless-dir.directive';
import { NameSwitchComponent } from './name-switch/name-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,   //our custom directive
    BetterHighlightDirective,
    HoverHighlightDirective,
    HostBindingDirective,
    DirectivePropBindingDirective,
    UnlessDirDirective,
    NameSwitchComponent  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
