import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.css']
})
export class ClientCardComponent implements OnInit {

  public cText:string = '';
  @Output() sendParent = new EventEmitter();

  public submit(){
    this.sendParent.emit(this.cText);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
