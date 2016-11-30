import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { LamdbaTimeService } from '../../providers/lamdba-time-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public time: String;

  constructor(public navCtrl: NavController, private timeService: LamdbaTimeService) {

  }

  getTime() {
    this.timeService.fetchA().subscribe(data  => {
      this.time = data.date.dateString;
    });
  }

}
