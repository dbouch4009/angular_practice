import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {
  girlFirstName: string;
  girlLastName: string;
  boyFirstName: string;
  boyLastName: string;

  //@Output() createdNumber = new EventEmitter<displayNumber: number>();
  @Output() boyCreated = new EventEmitter<{firstName: string, lastName: string}>();
  @Output() girlCreated = new EventEmitter<{firstName: string, lastName: string}>();

  onAddBoy(){
    this.boyCreated.emit({firstName: this.boyFirstName, lastName: this.boyLastName});
  }

  onAddGirl(){
    this.boyCreated.emit({firstName: this.girlFirstName, lastName: this.girlLastName});
  }

  // onStartGame(){
  //   this.num ++;
  //   console.log(this.num);
  // }

  // onStopGame(){
  //   console.log('Game Stopped');
  //   console.log(`Final Number: ${this.num}`);
  //   this.num = 0;
  // }

  constructor() { }

  ngOnInit() {
  }

}
