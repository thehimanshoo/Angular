import { Component, OnInit } from '@angular/core';
import {EventService} from '../../services/event.service';
import {IEvent} from '../../models/IEvent';

@Component({
  selector: 'app-free-events',
  templateUrl: './free-events.component.html',
  styleUrls: ['./free-events.component.css']
})
export class FreeEventsComponent implements OnInit {

  public events:IEvent[] = [];
  public errorMessage:string;
  constructor(private eventsService:EventService) { }

  ngOnInit(): void {
    this.eventsService.getFreeEvents().subscribe((data) => {
      this.events = data;
    } , (error) => {
      this.errorMessage = error;
    });
  }

}
