import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  constructor(public weatherService: WeatherService) {
  }

  ngOnInit() {
    this.weatherService.getWeather();
    this.weatherService.getForecast();
  }

  refresh() {
    this.weatherService.getWeather();
    this.weatherService.getForecast();
  }
}
