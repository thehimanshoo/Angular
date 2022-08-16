import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-msg-card',
  templateUrl: './msg-card.component.html',
  styleUrls: ['./msg-card.component.css']
})
export class MsgCardComponent implements OnInit {

  public msg:string = 'Hello';

  constructor() { }

  ngOnInit(): void {
  }

  /*public sayGoodMorning(){
    this.msg = 'Good Morning';
  }

  public sayGoodAfternoon(){
    this.msg = 'Good Afternoon';
  }

  public sayGoodEvening(){
    this.msg = 'Good Evening';
  }*/


  public displayMsg(value:string){
    this.msg = value;
  }

}
