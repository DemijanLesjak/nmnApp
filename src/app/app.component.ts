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

  constructor(
    public weatherService: WeatherService,
    public translate: TranslateService,
    public translateState: TranslateStateService) {

  }

  ngOnInit() {
    this.weatherService.getWeather();
    this.weatherService.getForecast();
  }

  refresh() {
    this.weatherService.getWeather();
    this.weatherService.getForecast();
  }

  changeLanguage(lang: 'en' | 'sl') {
    if (this.translateState.localization === lang) {
      return;
    }
    this.translateState.setLanguage(lang);
    this.refresh();
  }
}
