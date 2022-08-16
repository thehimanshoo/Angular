import {Component, Input, OnInit} from '@angular/core';
import {IRepository} from '../../models/IRepository';
import {IProfile} from '../../models/IProfile';

@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.css']
})
export class GithubReposComponent implements OnInit {

  @Input() githubRepos:IRepository[];
  @Input() githubProfile:IProfile;

  constructor() { }

  ngOnInit(): void {
  }

}
