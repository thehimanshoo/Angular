import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../services/employee.service';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent implements OnInit {

  public employees:any[] = [];

  constructor(private employeeService:EmployeeService) {}

  ngOnInit(): void {

  }

  public getData():void{
    this.employees = this.employeeService.fetchAllEmployees();
  }

}
