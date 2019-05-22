import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  persons = [
    //{firstName: 'King', lastName: 'Kong'}
  ];

  recentPerson: {firstName: string, lastName: string};
  
  recentLast = '';


  onPersonCreated(personData: {firstName: string, lastName: string}){
    //console.log(`Received Person Data: ${personData.firstName} ${personData.lastName}`);
    //this.recentPerson.firstName = personData.firstName;
    //this.recentPerson.lastName = personData.lastName;
    this.recentLast = personData.lastName;
    this.persons.push({
      firstName: personData.firstName,
      lastName: personData.lastName
    });
  }
  
}
