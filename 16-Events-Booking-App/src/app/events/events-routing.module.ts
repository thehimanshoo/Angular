import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsComponent } from './events.component';
import {FreeEventsComponent} from './components/free-events/free-events.component';
import {ProEventsComponent} from './components/pro-events/pro-events.component';
import {UploadEventsComponent} from './components/upload-events/upload-events.component';
import {AuthGuard} from '../root/guards/auth.guard';

const routes: Routes = [
  { path: '', component: EventsComponent },
  { path: 'free-events', component: FreeEventsComponent },
  { path: 'pro-events', component: ProEventsComponent , canActivate : [AuthGuard] },
  { path: 'upload-events', component: UploadEventsComponent, canActivate : [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
