import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hobby-switch',
  templateUrl: './hobby-switch.component.html',
  styleUrls: ['./hobby-switch.component.css']
})
export class HobbySwitchComponent implements OnInit {

  public hobby:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
