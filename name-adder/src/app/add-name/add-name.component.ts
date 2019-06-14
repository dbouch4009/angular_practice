import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import {NamesListService} from '../services/namesList.service';
import { Names } from '../entities/names';

@Component({
  selector: 'app-add-name',
  templateUrl: './add-name.component.html',
  styleUrls: ['./add-name.component.css']
})
export class AddNameComponent implements OnInit {
  
  currentName: Names;
  @Input() firstName: string;
  @Input() lastName: string;

  namesList: Names[];

  //@Output() personCreated = new EventEmitter<{firstName: string, lastName: string}>();

  onAddName(){
    //this.personCreated.emit({firstName: this.firstName, lastName: this.lastName});
    this.currentName = new Names(this.firstName, this.lastName);
    this.namesListService.addName(this.currentName);
    this.namesList.forEach(function (name) {
      console.log(`${name.firstName}, ${name.lastName}`);
    });
    // console.log(`Added: ${this.name.firstName}, ${this.name.lastName}
    //   Previous: ${this.namesList[this.namesList.length - 1].firstName}, ${this.namesList[this.namesList.length - 1].lastName}
    // `);
    //console.log(`Name count: ${this.namesList.length}`);
  }

  constructor(private namesListService: NamesListService) { }

  ngOnInit() {
    this.namesList = this.namesListService.namesList;
  }

}
