import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from '@application/games/games.component';
import { PageNotFoundComponent } from '@application/general/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'games',
    component: GamesComponent,
    loadChildren: () => import('@application/games/games.module').then(m => m.GamesModule),
  },
  {
    path: '',
    redirectTo: '/games/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
