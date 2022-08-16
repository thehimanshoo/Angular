import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {EmployeeService} from '../../services/employee.service';
import {IEmployee} from '../../models/IEmployee';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  public employeeId:number;
  public selectedEmployee:IEmployee;
  constructor(private activatedRoute:ActivatedRoute,
              private employeeService:EmployeeService,
              private ngxSpinner:NgxSpinnerService) { }

  ngOnInit(): void {
    this.ngxSpinner.show();
    this.activatedRoute.paramMap.subscribe((parms:ParamMap) => {
      console.log(parms);
      this.employeeId = Number(parms.get('id'));
    });

    this.employeeService.getAllEmployees().subscribe((data) => {
      this.selectedEmployee = data.find(employee => employee.id === this.employeeId);
      this.ngxSpinner.hide();
    });
  }

}
