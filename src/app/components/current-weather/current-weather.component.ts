import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { WeatherData } from '../../../models/WeatherData';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrentWeatherComponent {
  @Input() weather: WeatherData | undefined;

  get weatherIcon() {
    return `https://openweathermap.org/img/wn/${this.weather?.weather[0].icon}@2x.png`;
  }

  constructor(public translate: TranslateService) {
  }
}
