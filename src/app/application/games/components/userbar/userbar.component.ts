import { Component } from '@angular/core';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-userbar',
  templateUrl: './userbar.component.html',
  styleUrls: ['./userbar.component.sass']
})
export class UserbarComponent {
  faCircleUser = faCircleUser
}
