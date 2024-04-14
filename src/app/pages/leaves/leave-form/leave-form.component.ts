import {Component} from '@angular/core';
import {Leave} from "../../../core/interfaces/leave.interface";
import {LeaveService} from "../../../core/services/leave.service";
import {EmployeeState} from "../../../core/enums/employee-state.enum";

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

  constructor(private leaveService: LeaveService) {}

  onSubmit(): void {
    this.leaveService.addLeave(this.leave).subscribe((newLeave: any) => {
      console.log('Congé enregistré avec succès:', newLeave);
    });
  }
}
