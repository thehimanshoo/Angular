import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StocksRoutingModule } from './stocks-routing.module';
import { StocksComponent } from './stocks.component';
import { StockListComponent } from './components/stock-list/stock-list.component';
import { StockDetailsComponent } from './components/stock-details/stock-details.component';


@NgModule({
  declarations: [StocksComponent, StockListComponent, StockDetailsComponent],
  imports: [
    CommonModule,
    StocksRoutingModule
  ]
})
export class StocksModule { }
