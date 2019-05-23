//New Component; it is a Typescript class
import {Component} from '@angular/core';  //basis for importing components

@Component({         // decorator is a Typescript feature
    selector: 'app-server',  //selector by which it can be imported to other components
    templateUrl: './server.component.html'  //path to HTML component, best when placed in same folder
})
export class ServerComponent{
    serverId = 10;
    serverStatus = 'bamboozled';

    getServerStatus(){
        return this.serverStatus;
    }
}