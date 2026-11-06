import { Component, input, output } from '@angular/core';
import { Vehicle } from '../../../interface/vehicle-response';

@Component({
  imports: [],
  selector: 'app-vehicle-item',
  styleUrl: './vehicle-item.css',
  templateUrl: './vehicle-item.html',
})
export class VehicleItem {


  vehicle = input<Vehicle>();

  vehicleClicked = output<string>();

  getVehicleId() {
  
    const id = this.vehicle()?.url;

    id ? this.vehicleClicked.emit(id) : alert("Algo ha salido mal");

  }

}
