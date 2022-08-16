import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import  { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [UsersComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
