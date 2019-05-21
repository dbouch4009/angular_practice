import { Component, OnInit, Output, ViewChild, ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  newServerName = '';
  newServerContent = '';
  nickName = '';
  @ViewChild('serverCountry') serverCountry: ElementRef;  //accessing view ViewChild reference

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();  //these two are bound to app.component.html
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
   }

  onAddBlueprint() {
    this.blueprintCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
   }

   onAddNickname(nicknameInput) {
    this.nickName = nicknameInput.value;  //local reference from .html file
   }

   onAddCountry(){
     //this method is whack
     //this.serverCountry = this.serverCountry.nativeElement.value;
     this.serverCountry = (this.serverCountry.nativeElement.value);
     console.log(this.serverCountry);
   }

}
