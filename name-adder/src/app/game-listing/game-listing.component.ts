import { Component, OnInit, Input } from '@angular/core';
import { GamesListService } from '../services/gamesList.service';
import { Games } from '../entities/games';

@Component({
  selector: 'app-game-listing',
  templateUrl: './game-listing.component.html',
  styleUrls: ['./game-listing.component.css']
})
export class GameListingComponent implements OnInit {

  currentGame: Games;
  @Input() name = 'defname';
  @Input() rating: string = 'defrating';

  constructor(private gamesListService: GamesListService) { }

  ngOnInit() {
  }

}
