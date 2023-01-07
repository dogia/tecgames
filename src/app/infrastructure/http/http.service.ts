import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from '@domain/games/game';
import { Observable } from 'rxjs';
import { Api } from 'src/app/adapters/input/api';

@Injectable({
  providedIn: 'root'
})
export class HttpService implements Api{

  constructor(
    private http: HttpClient
  ) {}

  get(url: string, params?: any): Observable<any> {
    return this.http.get(url, {params: params})
  }

  post(): Observable<any> {
    throw new Error('Method not implemented.');
  }
  put(): Observable<any> {
    throw new Error('Method not implemented.');
  }
  delete(): Observable<any> {
    throw new Error('Method not implemented.');
  }

  list2games(apiGames: Array<any>): Array<Game> {
    return apiGames.map(response => {
      const game: Game = {
        gameID: response.gameID,
        steamAppID: response.steamAppID,
        title: {
          internal: response.internalName,
          external: response.external
        },
        thumb: response.thumb,
        cheapestDealID: response.cheapestDealID,
        cheapest: response.cheapest
      };
      return game;
    });
  }

  detail2game(id: number, response: any): Game {
    const game: Game = {
      gameID: id,
      steamAppID: response.info.steamAppID,
      title: {
        internal: '',
        external: response.info.title
      },
      thumb: response.info.thumb,
      cheapestDealID: '',
      cheapest: response.cheapestPriceEver.price,
      dealers: response.deals,
      cheapestDate: new Date(response.cheapestPriceEver.date * 1000)
    };
    return game;
  }
}
