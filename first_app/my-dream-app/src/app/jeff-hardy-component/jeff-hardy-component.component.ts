import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jeff-hardy-component',
  templateUrl: './jeff-hardy-component.component.html',
  styleUrls: ['./jeff-hardy-component.component.css']
})
export class JeffHardyComponentComponent implements OnInit {
  isTagTeam = false;
  weightIndex = '';
  constructor() {
    this.weightIndex = Math.random() > 0.5 ? 'overweight' : 'underweight';
   }

  handleTagTeamClick(){
    if(this.isTagTeam){
      this.isTagTeam = false;
    } else{
      this.isTagTeam = true;
    }
  }

  getColor(){
    return this.weightIndex === 'overweight' ? 'green' : 'red';
  }

  ngOnInit() {
  }

}
