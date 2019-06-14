import { Component, OnInit, Input } from '@angular/core';
import { GamesListService } from '../services/gamesList.service';
import { Games } from '../entities/games';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-listing',
  templateUrl: './game-listing.component.html',
  styleUrls: ['./game-listing.component.css']
})
export class GameListingComponent implements OnInit {

  currentGame: Games;
  @Input() name = 'defname';
  @Input() rating: string = 'defrating';

  constructor(private gamesListService: GamesListService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  onEditGame(){
    this.router.navigate(['edit'],{relativeTo: this.activatedRoute});
  }

}
