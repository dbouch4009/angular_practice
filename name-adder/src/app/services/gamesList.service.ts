import { Games } from '../entities/games';
import { EventEmitter } from '@angular/core';
export class GamesListService {
    getLastGame(){
        return this.gamesList.length - 1;
    }
    gamesList = [
        {
            name:'SMB 3',
            rating:'10'
        },
        {
            name:'Assassins Creed',
            rating: '9'
        }
    ];
    
  addGame(gameIn: Games){
    this.gamesList.push(gameIn);
    console.log(`Gamein: ${gameIn.name}, ${gameIn.rating}`);
    console.log(`Last Game: ${this.gamesList[this.getLastGame()].name} Total games: ${this.gamesList.length}`);
  }

    //gameAdded = new EventEmitter<Games>();
}