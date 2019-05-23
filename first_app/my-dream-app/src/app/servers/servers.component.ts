import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = '';

  constructor() {
    setTimeout(() =>{
      this.allowNewServer = true;
    },2000);
   }

   onCreateServer(){
     this.serverCreationStatus = 'Server created :-)';
   }

   displayServerStatus(){
     if(this.allowNewServer === true){
       return "Server Active";
     } else if(!this.allowNewServer){
       return "Unavailable Server";
     }
   }   

   onUpdateServerName(event: any){
     console.log(event);
     this.serverName = (<HTMLInputElement>event.target).value;  //the way for passing event argument to class property
   }

  ngOnInit() {
  }

  

}
