import { Component, OnInit } from '@angular/core';
import {IUser} from '../../models/IUser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user:IUser = {
    username : '',
    email : '',
    password : ''
  };
  constructor() { }

  ngOnInit(): void {
  }

  // register
  public register(){
    console.log(this.user);
  }
}
