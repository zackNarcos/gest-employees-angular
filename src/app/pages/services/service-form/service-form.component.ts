import { Component } from '@angular/core';
import {ServiceService} from "../../../core/services/service.service";
import {Service} from "../../../core/models/service.model";

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.css']
})
export class ServiceFormComponent {
  service: Service = {
    id: 0,
    code: '',
    name: ''
  };

  constructor(private serviceService: ServiceService) {}

  onSubmit(): void {
    this.serviceService.addService(this.service).subscribe((newService: any) => {
      console.log('Service ajouté avec succès:', newService);
    });
  }
}
