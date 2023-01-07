import { Component } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.sass']
})
export class GamesComponent {
  constructor() {
    window.addEventListener('scroll', e => {
      const logoContainer = document.getElementById('logo-container');
      const logoContainerSm = document.getElementById('logo-sm-container');

      if(window.scrollY > 1) {
        logoContainer?.classList.add('scrolled');
        logoContainerSm?.classList.add('scrolled');
      } else {
        logoContainer?.classList.remove('scrolled');
        logoContainerSm?.classList.remove('scrolled');
      }
    })
  }
}
