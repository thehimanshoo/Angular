import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-card',
  templateUrl: './auth-card.component.html',
  styleUrls: ['./auth-card.component.css']
})
export class AuthCardComponent implements OnInit {

  public isLoggedIn:boolean = false;

  public login(){
    this.isLoggedIn = true;
  }

  public logOut(){
    this.isLoggedIn = false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
