import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-switch',
  templateUrl: './name-switch.component.html',
  styleUrls: ['./name-switch.component.css']
})
export class NameSwitchComponent implements OnInit {

  names = ['Bob','Sue','Damian','Em'];
  namesLength = this.names.length;
  activeName = 'Kratos';
  namesIndex = 0;

  onChangeName(){
    if(this.namesIndex >= this.namesLength - 1){
      this.namesIndex = 0;
    } else{
      this.namesIndex ++;
    }    
    this.activeName = this.names[this.namesIndex];    
  }
  constructor() { }

  ngOnInit() {
  }

}
