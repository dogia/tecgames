import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.sass'],
  inputs: ['name', 'thumb', 'gameID']
})
export class GameComponent {
  public gameID: number = -1;
  public name: string = '';
  public thumb: string = '';
}
