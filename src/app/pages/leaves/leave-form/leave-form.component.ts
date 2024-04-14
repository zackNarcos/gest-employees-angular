import {Component} from '@angular/core';
import {Leave} from "../../../core/interfaces/leave.interface";
import {LeaveService} from "../../../core/services/leave.service";
import {EmployeeState} from "../../../core/enums/employee-state.enum";
import {EmployeeService} from "../../../core/services/employee.service";

@Component({
  selector: 'app-leave-form',
  templateUrl: './leave-form.component.html',
  styleUrls: ['./leave-form.component.css']
})
export class LeaveFormComponent {
  leave: Leave = {
    employeeId: 0,
    startDate: new Date(),
    endDate: new Date(),
    type: EmployeeState.Conge
  };

  allTypes: any[] = [
    {value: EmployeeState.Conge, label: 'Congé'},
    {value: EmployeeState.Absent, label: 'Absence'},
    {value: EmployeeState.Malade, label: 'Maladie'}
  ];

  allEmployees: any[] = [];

  constructor(private leaveService: LeaveService, private employeeService: EmployeeService) {
    this.employeeService.getAllEmployees().subscribe((employees: any) => {
      this.allEmployees = employees;
    });
  }

  onSubmit(): void {
    this.leaveService.addLeave(this.leave).subscribe((newLeave: any) => {
      console.log('Congé enregistré avec succès:', newLeave);
    });
  }
}
