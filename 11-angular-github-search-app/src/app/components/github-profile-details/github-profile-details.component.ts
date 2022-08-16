import {Component, Input, OnInit} from '@angular/core';
import {IProfile} from '../../models/IProfile';

@Component({
  selector: 'app-github-profile-details',
  templateUrl: './github-profile-details.component.html',
  styleUrls: ['./github-profile-details.component.css']
})
export class GithubProfileDetailsComponent implements OnInit {

  @Input() githubProfile:IProfile;
  constructor() { }

  ngOnInit(): void {
  }

}
