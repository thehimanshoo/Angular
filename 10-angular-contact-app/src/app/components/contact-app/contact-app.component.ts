import { Component, OnInit } from '@angular/core';
import {IContact} from '../../models/IContact';

@Component({
  selector: 'app-contact-app',
  templateUrl: './contact-app.component.html',
  styleUrls: ['./contact-app.component.css']
})
export class ContactAppComponent implements OnInit {

  public selectedContact:IContact;
  constructor() { }

  ngOnInit(): void {
  }

}
