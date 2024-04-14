import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LeaveFormComponent} from "./leave-form/leave-form.component";
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
const routes: Routes = [
  {
    path: 'form',
    component: LeaveFormComponent
  }
];
@NgModule({
  declarations: [
    LeaveFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class LeavesModule { }
