import { Component, OnInit } from '@angular/core';
import {IEmployee} from '../../models/IEmployee';
import {EmployeeService} from '../../services/employee.service';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  public employees:IEmployee[] = [];
  public errorMessage:string;
  constructor(private employeeService:EmployeeService,
              private ngxSpinner:NgxSpinnerService) { }

  ngOnInit(): void {
    this.ngxSpinner.show();
    this.employeeService.getAllEmployees().subscribe((data) => {
      this.employees = data;
      this.ngxSpinner.hide();
    }, (error) => {
      this.errorMessage = error;
    });
  }

}
