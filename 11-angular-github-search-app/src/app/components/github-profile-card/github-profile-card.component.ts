import {Component, Input, OnInit} from '@angular/core';
import {IProfile} from '../../models/IProfile';

@Component({
  selector: 'app-github-profile-card',
  templateUrl: './github-profile-card.component.html',
  styleUrls: ['./github-profile-card.component.css']
})
export class GithubProfileCardComponent implements OnInit {

  @Input() githubProfile:IProfile;
  constructor() { }

  ngOnInit(): void {
  }

}
