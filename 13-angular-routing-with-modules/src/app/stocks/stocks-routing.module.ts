import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StocksComponent } from './stocks.component';
import {StockListComponent} from './components/stock-list/stock-list.component';
import {StockDetailsComponent} from './components/stock-details/stock-details.component';

const routes: Routes = [
  { path: '', component: StocksComponent },
  { path: 'list', component: StockListComponent },
  { path: 'list/:id', component: StockDetailsComponent },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StocksRoutingModule { }
