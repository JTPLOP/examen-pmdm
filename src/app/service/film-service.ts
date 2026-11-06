import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmResponse } from '../interface/film-response';

@Service()
export class FilmService {


    http = inject(HttpClient)
    url = "https://swapi.dev/api/films"

    getAllFilm(): Observable<FilmResponse> {
        return this.http.get<FilmResponse>(this.url);
    }

    getOneFilm(id: number): Observable<FilmResponse> {
        return this.http.get<FilmResponse>(`${this.url}/${id}`);
    }

}
