import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ParentComponent } from './components/simple/parent/parent.component';
import { ChildComponent } from './components/simple/child/child.component';
import { ParentCardComponent } from './components/complex/parent-card/parent-card.component';
import { ChildCardComponent } from './components/complex/child-card/child-card.component';
import { ClientCardComponent } from './components/interaction/client-card/client-card.component';
import { ServerCardComponent } from './components/interaction/server-card/server-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    ParentCardComponent,
    ChildCardComponent,
    ClientCardComponent,
    ServerCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
