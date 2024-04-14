import {EmployeeState} from "../enums/employee-state.enum";
import {EmployeeType} from "../enums/employee-type.enum";

export interface Employee {
  id: number;
  matricule: string;
  state: EmployeeState;
  type: EmployeeType;
}

export interface Contractuel extends Employee {
  salary: number;
  prime: number;
  retenue: number;
  serviceId: number;
  contractType: string;
}

export interface Journalier extends Employee {
  costPerDay: number;
  daysWorked: number;
}

export interface Prestataire extends Employee {
  servicePeriod: string;
  serviceCost: number;

}
