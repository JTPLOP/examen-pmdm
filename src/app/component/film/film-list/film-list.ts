import { Component, inject, signal } from '@angular/core';
import { Films } from '../../../interface/film-response';
import { FilmService } from '../../../service/film-service';
import { FilmItem } from '../film-item/film-item';

@Component({
  imports: [FilmItem],
  selector: 'app-film-list',
  styleUrl: './film-list.css',
  templateUrl: './film-list.html',
})
export class FilmList {
  filmService= inject(FilmService)

  filmList = signal<Films[]>([]); //signal

  ngOnInit(): void {
    this.filmService.getAllFilm().subscribe(resp => {

      this.filmList.set(resp.results);

    });
  }




}
