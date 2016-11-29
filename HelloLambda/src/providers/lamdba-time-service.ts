import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class LamdbaTimeService {

  constructor(public http: Http) {

  }

  fetchA() {

    return new Promise(resolve => {
      this.http.get('http://localhost:3000/pathA')
        .map(res => res.json())
        .subscribe(data => {
          resolve(data.date.dateString);
        });
    });
  }

}
