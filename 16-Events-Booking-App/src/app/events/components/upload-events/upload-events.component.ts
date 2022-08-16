import { Component, OnInit } from '@angular/core';
import {IEvent} from '../../models/IEvent';
import {EventService} from '../../services/event.service';
import {Router} from '@angular/router';
import {UserService} from '../../../users/services/user.service';

@Component({
  selector: 'app-upload-events',
  templateUrl: './upload-events.component.html',
  styleUrls: ['./upload-events.component.css']
})
export class UploadEventsComponent implements OnInit {

  public event:IEvent = {
    name : '',
    image : '',
    date : '',
    type : '',
    price : null,
    info : ''
  };
  public message:string;
  public freeEvent:boolean;

  constructor(private eventService:EventService,
              private router:Router,
              private userService:UserService) { }

  public selectFreeEvent(event){
    this.freeEvent = event.target.value === 'FREE';
  }

  ngOnInit(): void {
  }

  public submitUpload(){
    this.eventService.uploadEvent(this.event).subscribe((data) => {
        this.message = data.result;
        if(this.event.type === 'PRO'){
            this.router.navigate(['/events/pro-events']);
        }
        if(this.event.type === 'FREE'){
          this.router.navigate(['/events/free-events']);
        }
    });
  }

  public isAdmin(){
    return this.userService.isAdminUser();
  }

}
