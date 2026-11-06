import { Routes } from '@angular/router';
import { FilmItemPage } from './component/film/film-item-page/film-item-page';
import { FilmList } from './component/film/film-list/film-list';
import { VehicleList } from './component/vehicle/vehicle-list/vehicle-list';

export const routes: Routes = [

    {path: "vehiculos", component:VehicleList},
    {path: "peliculas", component:FilmList},
    {path: "peliculas/:id", component:FilmItemPage},
    {path: "**", redirectTo: "vehiculos"},
    {path: "", pathMatch:'full', redirectTo:"vehiculos"}

];
