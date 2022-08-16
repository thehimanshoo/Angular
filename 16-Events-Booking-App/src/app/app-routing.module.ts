import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './root/components/home/home.component';

const routes: Routes = [
  { path : '' , component : HomeComponent},
  { path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  { path: 'events',
    loadChildren: () => import('./events/events.module').then(m => m.EventsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
