import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../../../service/film-service';

@Component({
  imports: [],
  selector: 'app-film-item-page',
  styleUrl: './film-item-page.css',
  templateUrl: './film-item-page.html',
})
export class FilmItemPage {

  private route = inject(ActivatedRoute);

  constructor() {
    // Access route parameters
    this.route.params.subscribe((params) => {
      const id = params['id'];
    });
  }

  filmService = inject(FilmService);

  ngOnInit(): void {
    this.filmService.getOneFilm(id).subscribe(resp => {

      this.filmList.set(resp.results);

    });
  }

}
