import { Component, inject, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Vehicle } from '../../../interface/vehicle-response';

@Component({
  imports: [],
  selector: 'app-vehicle-modal',
  styleUrl: './vehicle-modal.css',
  templateUrl: './vehicle-modal.html',
})
export class VehicleModal {

  modalService = inject(NgbModal);


  @Input() vehicleDetail: Vehicle | undefined;

}
