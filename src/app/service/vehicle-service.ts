import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { VehicleResponse } from '../interface/vehicle-response';

@Service()
export class VehicleService {

    http = inject(HttpClient)
    url = "https://swapi.dev/api/vehicles/"

    getAllVehicle(): Observable<VehicleResponse> {
        return this.http.get<VehicleResponse>(this.url);
    }

    getOneVehicle(urlVehicle: string): Observable<VehicleResponse> {
        return this.http.get<VehicleResponse>(urlVehicle);
    }


}
