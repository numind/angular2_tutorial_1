import { Component } from '@angular/core';
import { GithubService } from '../../services/github.service';

@Component({
  
  moduleId: module.id,
  selector: 'profile',
  templateUrl: 'profile.component.html'

})
export class ProfileComponent {

  private user: any[];
  private repos: any[];
  
  constructor (private _githubServices: GithubService){

    this._githubServices.getUser().subscribe(user => {
      console.log(user);
      this.user = user;
    });

    this._githubServices.getRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    });
  }

}
