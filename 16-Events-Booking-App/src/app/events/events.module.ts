import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { FreeEventsComponent } from './components/free-events/free-events.component';
import { ProEventsComponent } from './components/pro-events/pro-events.component';
import { UploadEventsComponent } from './components/upload-events/upload-events.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EventsComponent, FreeEventsComponent, ProEventsComponent, UploadEventsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    EventsRoutingModule
  ]
})
export class EventsModule { }
