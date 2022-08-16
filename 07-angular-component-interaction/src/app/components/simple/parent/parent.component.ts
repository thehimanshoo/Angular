import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  public message:string = "Good Evening";
  public text:string;

  constructor() { }

  ngOnInit(): void {
  }

}
