import { Component, OnInit } from '@angular/core';
import {IEmployee} from '../../models/IEmployee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  public employees:IEmployee[] = [
    {
      sno : '00AA10',
      name : 'Rajan',
      age : 25,
      designation : 'Software Engineer',
      location : 'Bangalore'
    },
    {
      sno : '00AA11',
      name : 'John',
      age : 45,
      designation : 'Project Manager',
      location : 'Hyderabad'
    },
    {
      sno : '00AA12',
      name : 'Mahesh',
      age : 35,
      designation : 'Tech Lead',
      location : 'Bangalore'
    },
    {
      sno : '00AA13',
      name : 'Wilson',
      age : 55,
      designation : 'Director',
      location : 'Bangalore'
    }

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
