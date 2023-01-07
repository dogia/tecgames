import { Component } from '@angular/core';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cartbar',
  templateUrl: './cartbar.component.html',
  styleUrls: ['./cartbar.component.sass']
})
export class CartbarComponent {
  public faCartShopping = faCartShopping
}
