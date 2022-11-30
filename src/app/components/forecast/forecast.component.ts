import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ForecastData } from '../../../models/ForecastData';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForecastComponent {
  @Input() forecast: ForecastData | null = null;

  getWeatherIcon(icon: string) {
    return `https://openweathermap.org/img/wn/${icon}.png`;
  }
}
