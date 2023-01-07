import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserbarComponent } from './components/userbar/userbar.component';
import { CartbarComponent } from './components/cartbar/cartbar.component';
import { LogotypeComponent } from './components/logotype/logotype.component';
import { GamesComponent } from './games.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GameComponent } from './components/game/game.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';
import { DealComponent } from './components/deal/deal.component';


@NgModule({
  declarations: [
    SearchbarComponent,
    HeaderComponent,
    FooterComponent,
    UserbarComponent,
    CartbarComponent,
    LogotypeComponent,
    GameComponent,

    // Pages
    GamesComponent,
    HomeComponent,
    DetailComponent,
    DealComponent

  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [GamesComponent]
})
export class GamesModule { }
