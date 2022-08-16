import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tour-card',
  templateUrl: './tour-card.component.html',
  styleUrls: ['./tour-card.component.css']
})
export class TourCardComponent implements OnInit {

  public image_1:string = '../../../../assets/img/card_1.jpg';
  public image_2:string = '../../../../assets/img/card_2.jpg';
  public image_3:string = '../../../../assets/img/card_3.jpg';
  public image_4:string = '../../../../assets/img/card_4.jpg';

  public tours:string[] = ['Paris' , 'Bangkok' , 'Indonesia' , 'Malaysia'];

  constructor() { }

  ngOnInit(): void {
  }

}
