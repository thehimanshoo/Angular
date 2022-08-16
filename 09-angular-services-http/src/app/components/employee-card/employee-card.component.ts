import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../services/employee.service';
import {IEmployee} from '../../models/IEmployee';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent implements OnInit {

  public employees:IEmployee[];

  constructor(private employeeService:EmployeeService) {}

  ngOnInit(): void {

  }

  public getData():void{
      this.employeeService.fetchAllEmployees().subscribe((data) => {
        this.employees = data;
      });
  }

}
