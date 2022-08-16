import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ContactService} from '../../services/contact.service';
import {IContact} from '../../models/IContact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  public contacts:IContact[];
  public errorMessage:string;
  @Output() sendContact = new EventEmitter();

  constructor(private contactService:ContactService) { }

  ngOnInit(): void {
    this.contactService.getAllContacts().subscribe((data) => {
      this.contacts = data;
    }, (error) => {
      this.errorMessage = error;
    });
  }

  public selectContact(contact:IContact){
    this.sendContact.emit(contact);
  }

}
