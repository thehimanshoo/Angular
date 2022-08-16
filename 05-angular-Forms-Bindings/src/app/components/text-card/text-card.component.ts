import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-card',
  templateUrl: './text-card.component.html',
  styleUrls: ['./text-card.component.css']
})
export class TextCardComponent implements OnInit {

  public username:string = '';
  constructor() { }

  ngOnInit(): void {
  }

  public changeUsername(event){
    this.username = event.target.value
  }

}
