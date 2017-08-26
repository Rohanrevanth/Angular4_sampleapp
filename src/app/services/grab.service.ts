import { Injectable, Inject } from '@angular/core';
import { Jsonp, Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class GrabService {

  constructor(
  	private http: Http) { 
  }

  grab(url) {
    let body = {
      "url" : url
    };
    let grabUrl = 'give-your-url-here';
    let bodyString = JSON.stringify(body);
    let headers      = new Headers({ 'Content-Type': 'application/json' });
    let options       = new RequestOptions({ headers: headers });
    return this.http.post(grabUrl, body, options)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json() || 'Server error getting login data'))
  }

}