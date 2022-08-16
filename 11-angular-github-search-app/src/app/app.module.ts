import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { GithubAppComponent } from './components/github-app/github-app.component';
import { GithubProfileComponent } from './components/github-profile/github-profile.component';
import { GithubProfileCardComponent } from './components/github-profile-card/github-profile-card.component';
import { GithubProfileDetailsComponent } from './components/github-profile-details/github-profile-details.component';
import { GithubReposComponent } from './components/github-repos/github-repos.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    GithubAppComponent,
    GithubProfileComponent,
    GithubProfileCardComponent,
    GithubProfileDetailsComponent,
    GithubReposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
