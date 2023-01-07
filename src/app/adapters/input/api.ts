import { Game } from "@domain/games/game";
import { Observable } from "rxjs";

export interface Api {
  get(url: string, params?: any): Observable<any>
  post(): Observable<any>
  put(): Observable<any>
  delete(): Observable<any>

  list2games(apiGames: Array<any>): Array<Game>
  detail2game(id: number, response: any): Game
}
