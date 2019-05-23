import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rassler',
  templateUrl: './rassler.component.html',
  styleUrls: ['./rassler.component.css']
})
export class RasslerComponent implements OnInit {
  rasslers = ['Hogan','Nash','DDP','John Cena','Undertaker','Bret Hart'];
  rasslerName = 'Hogan';
  constructor() { }

  ngOnInit() {
  }

}
