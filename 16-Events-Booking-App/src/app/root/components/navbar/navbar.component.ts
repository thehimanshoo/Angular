import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../users/services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private userService:UserService,
              private router:Router) { }

  ngOnInit(): void {
  }

  public isLogin(){
    return this.userService.isLoggedIn();
  }

  public clickLogout(){
    this.userService.logOut();
    this.router.navigate(['/']);
  }

  public getUser(){
   return this.userService.getUserData();
  }

}
