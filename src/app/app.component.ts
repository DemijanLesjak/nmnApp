import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public weatherService: WeatherService) {
  }

  ngOnInit() {
    this.weatherService.getWeather();
  }

  refresh() {
    this.weatherService.getWeather();
  }
}
