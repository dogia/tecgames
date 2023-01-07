import { Injectable, Output, EventEmitter } from '@angular/core';
import { Game } from '@domain/games/game';
import { HttpService } from '@infrastructure/http/http.service';
import { environment } from '@environments/environment';
import { lastValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  @Output() results: EventEmitter<any> = new EventEmitter();

  private query$: Observable<any> | null = null;
  constructor(
    private api: HttpService
  ) { }

  async find(title: string): Promise<Game[]> {
    let games: Array<Game> = [];
    this.query$ = this.api
        .get(`${environment.host}/api/1.0/games`, {title: title, limit: 10});
    const response = await lastValueFrom(this.query$);
    games = this.api.list2games(response);
    return games;
  }

  async detailOf(gameID: number): Promise<Game> {
    this.query$ = this.api
        .get(`${environment.host}/api/1.0/games`, {id: gameID});
    const response = await lastValueFrom(this.query$);

    const game: Game = this.api.detail2game(gameID, response);
    return game;
  }
}
