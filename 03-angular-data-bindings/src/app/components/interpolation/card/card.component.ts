import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public msg:string = 'Good Afternoon';
  public price:number = 580;
  public time:string = new Date().toLocaleTimeString();

  constructor() { }

  ngOnInit(): void {
  }

  // display date
  public getDate(){
    return new Date().toLocaleDateString();
  }

  // display time
  public getTime(){
    setInterval(() => {
      this.time = new Date().toLocaleTimeString()
    } , 1000);
  }
}
