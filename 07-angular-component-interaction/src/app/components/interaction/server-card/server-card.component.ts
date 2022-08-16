import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-server-card',
  templateUrl: './server-card.component.html',
  styleUrls: ['./server-card.component.css']
})
export class ServerCardComponent implements OnInit {

  public sText:string = '';

  @Input() receiveText:string;

  constructor() { }

  ngOnInit(): void {
  }

}
