import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-john-cena-component',
  templateUrl: './john-cena-component.component.html',
  styleUrls: ['./john-cena-component.component.css']
})
export class JohnCenaComponentComponent implements OnInit {
  finishingMove = 'Attitude Adjustment';
  opponent = 'Big Show';
  matchStatus = '';
  matchFinished = false;

  performFinishingMove(){
    this.matchStatus = this.opponent + ': ' + this.finishingMove;
    this.evaluateMatch();
  }
  
  evaluateMatch(){
    //this.finishingMove = (<HTMLInputElement>event.target).value;  //the way for passing event argument to class property

    if(this.finishingMove === 'Attitude Adjustment'){
      this.matchFinished = true;
      console.log('Match Finished');
    } else{
      this.matchFinished = false;
      console.log('Match ongoing');
    }
  }

  displayMatch(){    
    if(this.matchFinished){
      return "Ding Ding Ding!";
    } else{
      return "No Pinfall!";
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
