import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hobby-select',
  templateUrl: './hobby-select.component.html',
  styleUrls: ['./hobby-select.component.css']
})
export class HobbySelectComponent implements OnInit {

  public eating:boolean = false;
  public coding:boolean = false;
  public sleeping:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
