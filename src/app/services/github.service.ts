import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{

    private username:string;
    private client_id = 'e72ce22fb3a336c8dd91';
    private client_secret = '1c159944726de0448a19870b436623d5130f2964';

    constructor(private _http: Http){
        console.log('Github service ready!');
        this.username = 'numind';
    };

    getUser(){
        console.log('https://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret);
        return this._http.get('https://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
        .map(res => res.json());
    };
    
    getRepos(){
        return this._http.get('https://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
        .map(res => res.json());
    };

    updateUser(username:string){
        this.username = username;
    };
    
}