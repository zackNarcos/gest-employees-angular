import {Component} from '@angular/core';
import {Employee} from "../../../core/models/employee.model";
import {EmployeeService} from "../../../core/services/employee.service";
import {EmployeeState} from "../../../core/enums/employee-state.enum";
import {EmployeeType} from "../../../core/enums/employee-type.enum";
import {ServiceService} from "../../../core/services/service.service";

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent {
  employee: any = {
    id: 0,
    matricule: '',
    state: EmployeeState.Present,
    type: EmployeeType.Prestataire,
    name: '',
    serviceId: 0,
    contractType: '',
    salary: 0,
    costPerDay: 0,
    servicePeriod: '',
    serviceCost: 0,
  };

  allServices: any[] = [];

  allTypes: any[] = [
    {value: EmployeeType.Prestataire, label: 'Prestataire'},
    {value: EmployeeType.Contractuel, label: 'Contractuel'},
    {value: EmployeeType.Journalier, label: 'Journalier'}
  ];

  constructor(
    private employeeService: EmployeeService,
    private serviceService: ServiceService
  ) {
    this.serviceService.getAllServices().subscribe((services: any) => {
      this.allServices = services;
    });
  }

  onSubmit(): void {
    this.employeeService.addEmployee(this.employee).subscribe((newEmployee: any) => {
      console.log('Employé ajouté avec succès:', newEmployee);
    });
  }

  protected readonly EmployeeType = EmployeeType;
}
