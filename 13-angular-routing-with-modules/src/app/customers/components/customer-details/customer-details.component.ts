import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {CustomerService} from '../../services/customer.service';
import {ICustomer} from '../../models/ICustomer';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  public customerId:string;
  public selectedCustomer:ICustomer;
  constructor(private activatedRoute:ActivatedRoute,
              private customerService:CustomerService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param:ParamMap) => {
      this.customerId = param.get('id');
    });
    this.customerService.getAllCustomers().subscribe((data) => {
      this.selectedCustomer = data.find(customer => customer.login.uuid === this.customerId);
    });
  }

}
