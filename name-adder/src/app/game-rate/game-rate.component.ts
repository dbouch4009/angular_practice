import { Component, OnInit, Input } from '@angular/core';
import {LoggingService} from '../services/logging.service';
import {GamesListService} from '../services/gamesList.service';
import { Games } from '../entities/games';

@Component({
  selector: 'app-game-rate',
  templateUrl: './game-rate.component.html',
  styleUrls: ['./game-rate.component.css'],
  providers: [LoggingService]
})
export class GameRateComponent implements OnInit {

  @Input() name: string;
  @Input() rating: string;
  currentGame: Games;

  constructor(private loggingService: LoggingService, private gamesListService: GamesListService) {

   }

  ngOnInit() {
  }

  onAddGame(name: string, rating: string){
    this.currentGame = new Games(this.name,this.rating);
    this.loggingService.logTestOutput('on add game');
    //this.gamesListService.gameAdded.emit(this.currentGame);
    this.gamesListService.addGame(this.currentGame);
    
  }

}
