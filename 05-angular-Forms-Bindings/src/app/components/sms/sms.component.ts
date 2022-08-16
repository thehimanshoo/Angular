import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.css']
})
export class SmsComponent implements OnInit {

  public message:string = '';
  public maxChars:number = 100;

  constructor() { }

  ngOnInit(): void {
  }

}
