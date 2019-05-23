import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rassler-list-component',
  templateUrl: './rassler-list-component.component.html',
  styleUrls: ['./rassler-list-component.component.css']
})
export class RasslerListComponentComponent implements OnInit {
  rasslers = ['Hogan','Nash','DDP','John Cena','Undertaker','Bret Hart'];
  
  constructor() {
    //console.log(this.rasslers);
   }

  addRassler(){
    this.rasslers.push('Sting');
  }

  ngOnInit() {
  }

}
