import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { AuthCardComponent } from './components/auth-card/auth-card.component';
import { HobbySelectComponent } from './components/hobby-select/hobby-select.component';
import { HobbySwitchComponent } from './components/hobby-switch/hobby-switch.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { PersonListComponent } from './components/person-list/person-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthCardComponent,
    HobbySelectComponent,
    HobbySwitchComponent,
    EmployeesComponent,
    PersonListComponent
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
