import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {ServiceListComponent} from "./service-list/service-list.component";
import {ServiceDetailComponent} from "./service-detail/service-detail.component";
import {ServiceFormComponent} from "./service-form/service-form.component";
import {FormsModule} from "@angular/forms";

const routes: Routes = [
  { path: 'services', component: ServiceListComponent },
  { path: 'services/:id', component: ServiceDetailComponent },
  { path: 'create', component: ServiceFormComponent }

];

@NgModule({
  declarations: [
    ServiceListComponent,
    ServiceDetailComponent,
    ServiceFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class ServicesModule { }
