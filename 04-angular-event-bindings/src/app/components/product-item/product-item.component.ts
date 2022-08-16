import { Component, OnInit } from '@angular/core';
import {IProduct} from '../../models/IProduct';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  public product:IProduct = {
    id : '00AA45',
    image : 'https://images-na.ssl-images-amazon.com/images/I/51LO7NCsMjL._SY355_.jpg',
    name : 'Smart Watch',
    price : 850,
    qty : 2
  };
  constructor() { }

  ngOnInit(): void {
  }

  // incrQty
  public incrQty(){
    this.product.qty = this.product.qty + 1;
  }

  // decrQty
  public decrQty(){
    this.product.qty = (this.product.qty - 1 > 0) ? this.product.qty - 1 : 1;
  }

}
