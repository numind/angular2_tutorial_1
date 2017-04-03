import { Component } from '@angular/core';
import { GithubService } from '../../services/github.service';

@Component({
  
  moduleId: module.id,
  selector: 'profile',
  templateUrl: 'profile.component.html'

})
export class ProfileComponent {

  user: any;
  repos: any[];
  
  username: string;

  constructor (private _githubServices: GithubService){

    this.user = false;
  
  }

  searchUser(){

    if(this.username !== ""){
      this._githubServices.updateUser(this.username);

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

}
