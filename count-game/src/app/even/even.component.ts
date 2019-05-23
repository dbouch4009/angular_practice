import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {

  displayNum: number = 0;
  
  constructor() { }

  ngOnInit() {
  }

}
