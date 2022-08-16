import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child-card',
  templateUrl: './child-card.component.html',
  styleUrls: ['./child-card.component.css']
})
export class ChildCardComponent implements OnInit {

  @Input() cText:string; // receives data from parent
  @Output() sendData = new EventEmitter();

  public childText:string = '';

  public inputText(){
    this.sendData.emit(this.childText);
  }



  constructor() { }

  ngOnInit(): void {
  }

}
