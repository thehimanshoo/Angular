import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeesComponent } from './employees.component';
import {EmployeeListComponent} from './components/employee-list/employee-list.component';
import {EmployeeDetailsComponent} from './components/employee-details/employee-details.component';

const routes: Routes = [
  { path: '', component: EmployeesComponent },
  { path: 'list', component: EmployeeListComponent },
  { path: 'list/:id', component: EmployeeDetailsComponent },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
