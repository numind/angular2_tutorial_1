import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService{

    constructor(private _http: Http){

    };

    getTodos(){
        return this._http.get('http://localhost:3000/api/v1/todos')
        .map(res => res.json())
    }

}