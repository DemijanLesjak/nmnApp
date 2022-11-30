import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  timestamp: string = '';

  constructor(public weatherService: WeatherService) {
  }

  ngOnInit() {
    this.weatherService.getWeather();
    moment.locale('sl');
    this.timestamp = moment().format('LLLL');
  }
}
