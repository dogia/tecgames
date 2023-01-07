import { Component } from '@angular/core';
import { Game } from '@domain/games/game';
import { GamesService } from '@infrastructure/games/games.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  public search: string = '';
  public games: Array<Game> = [];
  constructor(
    public gamesService: GamesService
  ){
    gamesService.results.subscribe(
      eventData => {
        const {games, search} = eventData;
        this.games = games;
        this.search = search;
      }
    );
  }
}
