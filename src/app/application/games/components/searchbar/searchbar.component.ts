import { Component, OnInit } from '@angular/core';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { GamesService } from '@infrastructure/games/games.service';
import { debounceTime, fromEvent, map } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.sass']
})
export class SearchbarComponent implements OnInit {
  faSearch = faSearch;

  constructor(
    private gamesService: GamesService
  ) { }

  private search = async (search: string) => {
    const games = await this.gamesService.find(search);
    this.gamesService.results.emit({games: games, search: search});
  }

  ngOnInit() {
    const searchbars = document.querySelectorAll('.search');

    for (const i in searchbars) {
      const searchbar = searchbars[i] as HTMLInputElement;
      if (typeof searchbar === 'object') {
        const input$ = fromEvent(searchbar, 'input');
        input$
          .pipe(
            map((e: any) => e.currentTarget.value),
            debounceTime(300)
          ).subscribe(this.search)
      }
    }
  }

  openSearchModal() {
    Swal.fire({
      title: 'Search Tool',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Search',
      showLoaderOnConfirm: true,
      preConfirm: this.search,
      allowOutsideClick: () => !Swal.isLoading()
    }).then()
  }
}
