import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-girlbox',
  templateUrl: './girlbox.component.html',
  styleUrls: ['./girlbox.component.css']
})
export class GirlboxComponent implements OnInit {
  firstName: string;
  lastName: string;

  constructor() { }

  ngOnInit() {
    console.log('Girlbox init called');
  }

}
