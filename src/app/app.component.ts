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
    this.weatherService.getWeather().subscribe(res => {
      console.log('weather', res);
    });
  }
}
