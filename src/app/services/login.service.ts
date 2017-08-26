import { Injectable, Inject } from '@angular/core';
import { Jsonp, Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class LoginService {

  constructor(
  	private http: Http) { 
  }

  userLogin(username, password) {
    let body = {
      "username" : username,
      "password" : password
    };
    let loginUrl = 'give-your-url-here';
    let bodyString = JSON.stringify(body);
    let headers      = new Headers({ 'Content-Type': 'application/json' });
    let options       = new RequestOptions({ headers: headers });
    return this.http.post(loginUrl, body, options)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json() || 'Server error getting login data'))
  }

}
