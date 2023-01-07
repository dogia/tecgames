import { Component } from '@angular/core';

@Component({
  selector: 'app-deal',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.sass'],
  inputs: ['storeID', 'retail', 'price', 'saving']
})
export class DealComponent {
  public storeID: number = -1;
  public retail: number = -1;
  public price: number = -1;
  public saving: number = -1;
}
