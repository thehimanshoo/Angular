import { Component, OnInit } from '@angular/core';
import {ICustomer} from '../../models/ICustomer';
import {CustomerService} from '../../services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  public customers:ICustomer[] = [];
  public errorMessage:string = '';
  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    this.customerService.getAllCustomers().subscribe((data) => {
      this.customers = data;
    }, (error) => {
      this.errorMessage = error;
    });
  }

}
