import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../services/employee.service';
import {IEmployee} from '../../models/IEmployee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees:IEmployee[];
  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.fetchAllEmployees().subscribe((data) => {
      this.employees = data;
    });
  }

}
