import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { LambdaTime } from '../models/lambda-time';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class LamdbaTimeService {
  private timesUrl = '//http://localhost:3000/pathA';

  constructor(public http: Http) {

  }

  fetchA(): Observable<LambdaTime> {

    return this.http.get(this.timesUrl).map(res => res.json());
  }

}
