import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { StopWatchComponent } from './components/stop-watch/stop-watch.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductItemComponent,
    StopWatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
