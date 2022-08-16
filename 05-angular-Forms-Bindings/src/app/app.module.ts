import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextCardComponent } from './components/text-card/text-card.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { FormsModule } from '@angular/forms';
import { SmsComponent } from './components/sms/sms.component';
import { ShowPasswordComponent } from './components/show-password/show-password.component';
import { AmountRangeComponent } from './components/amount-range/amount-range.component';
import { ThemeComponent } from './components/theme/theme.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    TextCardComponent,
    UserCardComponent,
    SmsComponent,
    ShowPasswordComponent,
    AmountRangeComponent,
    ThemeComponent,
    RegisterComponent
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
