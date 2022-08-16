import { Component, OnInit } from '@angular/core';
import {IUser} from '../../models/IUser';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user:IUser = {
    name : '',
    email : '',
    password : ''
  };
  public errorMessage:string;
  constructor(private userService:UserService,
              private router:Router) { }

  ngOnInit(): void {
  }

  // submitLogin
  public submitLogin(){
    this.userService.login(this.user).subscribe((data) => {
      let token = data.token;
      // store the token in local storage
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(data.user));
      //redirect the page to pro events
      this.router.navigate(['/events/pro-events']);
    }, (error) => {
      this.errorMessage = error;
    });
  }

}
