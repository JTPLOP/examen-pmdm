import { Component, inject, signal } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Vehicle } from '../../../interface/vehicle-response';
import { VehicleService } from '../../../service/vehicle-service';
import { VehicleItem } from '../vehicle-item/vehicle-item';
import { VehicleModal } from '../vehicle-modal/vehicle-modal';

@Component({
  imports: [VehicleItem],
  selector: 'app-vehicle-list',
  styleUrl: './vehicle-list.css',
  templateUrl: './vehicle-list.html',
})
export class VehicleList {


  vehicleService= inject(VehicleService)
  private modalService = inject(NgbModal);

  vehicleList = signal<Vehicle[]>([]); //signal

  
  
  ngOnInit(): void {
    this.vehicleService.getAllVehicle().subscribe(resp => {

      this.vehicleList.set(resp.results);

    });
  }

  openVehicleModal($event: string) {

    this.vehicleService.getOneVehicle($event).subscribe (resp =>{
      const refModal = this.modalService.open(VehicleModal)

      refModal.componentInstance.vehicleDetail = resp;


    });

  }


}
