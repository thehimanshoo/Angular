import { Component, OnInit } from '@angular/core';
import {GithubService} from '../../services/github.service';
import {IProfile} from '../../models/IProfile';
import {IRepository} from '../../models/IRepository';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.css']
})
export class GithubAppComponent implements OnInit {

  public githubUser:string;
  public githubProfile:IProfile;
  public githubRepos:IRepository[] = [];
  public errorMessage:string;
  constructor(private githubService:GithubService,
              private ngxSpinner:NgxSpinnerService) { }

  ngOnInit(): void {
  }

  // submit search
  public submitUser(){
    // profile
    this.ngxSpinner.show(); // show spinner
    this.githubService.searchProfile(this.githubUser).subscribe((data) => {
      this.githubProfile = data;
    }, (error) => {
      this.errorMessage = error;
    });

    // repos
    this.githubService.searchRepos(this.githubUser).subscribe((data) => {
      this.githubRepos = data;
      this.ngxSpinner.hide(); // hide the spinner
    },(error) => {
      this.errorMessage = error;
    });
  }

}
