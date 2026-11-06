import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Films } from '../../../interface/film-response';

@Component({
  imports: [RouterLink],
  selector: 'app-film-item',
  styleUrl: './film-item.css',
  templateUrl: './film-item.html',
})
export class FilmItem {

  film = input<Films>();


  


}
