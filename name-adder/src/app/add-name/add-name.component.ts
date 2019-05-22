import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-name',
  templateUrl: './add-name.component.html',
  styleUrls: ['./add-name.component.css']
})
export class AddNameComponent implements OnInit {
  firstName: string = '';
  lastName: string = '';

  @Output() personCreated = new EventEmitter<{firstName: string, lastName: string}>();

  onAddName(){
    this.personCreated.emit({firstName: this.firstName, lastName: this.lastName});
    console.log(`${this.firstName}, ${this.lastName}` );
  }

  constructor() { }

  ngOnInit() {
  }

}
