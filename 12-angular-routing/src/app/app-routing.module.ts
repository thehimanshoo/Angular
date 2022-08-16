import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {EmployeesComponent} from './components/employees/employees.component';
import {StocksComponent} from './components/stocks/stocks.component';
import {AboutComponent} from './components/about/about.component';
import {EmployeeDetailsComponent} from './components/employee-details/employee-details.component';

const routes: Routes = [
  { path : '' , component: HomeComponent },
  { path : 'employees' , component: EmployeesComponent },
  { path : 'employees/:id' , component: EmployeeDetailsComponent },
  { path : 'stocks' , component: StocksComponent },
  { path : 'about' , component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
