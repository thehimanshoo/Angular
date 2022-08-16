import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public messageOne : string = 'Good Morning';
  public messageTwo : string = 'Good Afternoon';
  public messageThree : string = 'Good Evening';

  constructor() { }

  ngOnInit(): void {
  }

}
