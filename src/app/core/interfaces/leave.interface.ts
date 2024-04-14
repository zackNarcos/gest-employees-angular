import {EmployeeState} from "../enums/employee-state.enum";

export interface Leave {
  employeeId: number;
  startDate: Date;
  endDate: Date;
  type: EmployeeState;

}
