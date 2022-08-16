import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/interpolation/card/card.component';
import { TourCardComponent } from './components/prop-binding/tour-card/tour-card.component';
import { MsgCardComponent } from './components/events-binding/msg-card/msg-card.component';
import { CounterComponent } from './components/events-binding/counter/counter.component';
import { InfoCardComponent } from './components/template-ref/info-card/info-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TourCardComponent,
    MsgCardComponent,
    CounterComponent,
    InfoCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
