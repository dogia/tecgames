import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from '@domain/games/game';
import { GamesService } from '@infrastructure/games/games.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent {
  public gameID: number = -1;
  public game: Game | null = null;

  constructor(
    private route: ActivatedRoute,
    private gamesService: GamesService
  ) {
    this.route.params.subscribe(async params => {
      this.gameID = params['id'];
      this.game = await this.gamesService.detailOf(this.gameID);
    })
  }
}
