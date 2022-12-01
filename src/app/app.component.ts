import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { TranslateService } from '@ngx-translate/core';
import { TranslateStateService } from './services/translate-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  geolocation: any;

  constructor(
    public weatherService: WeatherService,
    public translate: TranslateService,
    public translateState: TranslateStateService) {

  }

  ngOnInit() {
    this.geolocation = navigator.geolocation;
    this.refresh();
  }

  refresh() {
    if (this.geolocation) {
      this.geolocation.getCurrentPosition((pos: GeolocationPosition) => {
        this.weatherService.getWeather(pos.coords.latitude, pos.coords.longitude);
        this.weatherService.getForecast(pos.coords.latitude, pos.coords.longitude);
      });
    } else {
      this.weatherService.getWeather();
      this.weatherService.getForecast();
    }
  }

  changeLanguage(lang: 'en' | 'sl') {
    if (this.translateState.localization === lang) {
      return;
    }
    this.translateState.setLanguage(lang);
    this.refresh();
  }
}
