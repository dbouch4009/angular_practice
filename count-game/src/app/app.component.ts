import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  boyCollection = [
    
  ];
  girlCollection = [
    
  ];

  onBoyReceived(boyData: {firstName: string, lastName: string}){
    this.boyCollection.push({
      lastName: boyData.lastName,
      firstName: boyData.firstName
    });
    console.log('Boy Received');
    console.log(this.boyCollection);
  }

  onGirlReceived(girlData: {firstName: string, lastName: string}){
    this.girlCollection.push({
      lastName: girlData.lastName,
      firstName: girlData.firstName
    });
    console.log('Girl Received');
    console.log(this.girlCollection);
  }

  onEvenAdded(displayNum: number){
    this.boyCollection.push(displayNum);
    console.log(this.boyCollection);
  }

  onOddAdded(displayNum: number){
    this.girlCollection.push(displayNum);
    console.log(this.girlCollection);
  }
}
