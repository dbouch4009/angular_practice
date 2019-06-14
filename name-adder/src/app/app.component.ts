import { Component, Input } from '@angular/core';
import {Games} from './entities/games';
import {GamesListService} from './services/gamesList.service';
import { LoggingService } from './services/logging.service';
import { NamesListService } from './services/namesList.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[GamesListService, LoggingService]
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


  // Games Ratings from here:

  gamesList: Games[] = [];

  constructor(private gamesListService: GamesListService, 
    private loggingService: LoggingService,
    private namesListService: NamesListService) {

   }

   ngOnInit(){
     this.gamesList = this.gamesListService.gamesList;  //assigning by reference
   }

   
   
}
