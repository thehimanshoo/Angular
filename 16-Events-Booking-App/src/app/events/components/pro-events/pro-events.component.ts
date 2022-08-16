import { Component, OnInit } from '@angular/core';
import {IEvent} from '../../models/IEvent';
import {EventService} from '../../services/event.service';

@Component({
  selector: 'app-pro-events',
  templateUrl: './pro-events.component.html',
  styleUrls: ['./pro-events.component.css']
})
export class ProEventsComponent implements OnInit {

  public events:IEvent[];
  public errorMessage:string;
  constructor(private eventsService:EventService) { }

  ngOnInit(): void {
    this.eventsService.getProEvents().subscribe((data) => {
      this.events = data;
    } , (error) => {
      this.errorMessage = error;
    });
  }

}
