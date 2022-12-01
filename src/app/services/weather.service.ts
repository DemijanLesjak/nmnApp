import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable, startWith, tap } from 'rxjs';
import { WeatherData } from '../../models/WeatherData';
import * as moment from 'moment';
import { ForecastData } from '../../models/ForecastData';
import { TranslateStateService } from './translate-state.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private readonly _apiKey: string = '950f39172926f5201c8a6c308454982e';
  private readonly _mariborLat: string = '46.555';
  private readonly _mariborLon: string = '15.647';
  public weatherData$: BehaviorSubject<WeatherData | null> = new BehaviorSubject<WeatherData | null>(null);
  public forecastData$: BehaviorSubject<ForecastData | null> = new BehaviorSubject<ForecastData | null>(null);
  public timestamp$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(
    private _http: HttpClient,
    public translateState: TranslateStateService
  ) {
    moment.locale('sl');
  }

  getWeather(lat?: number, long?: number): void {
    this._http.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat ?? this._mariborLat}&lon=${long ?? this._mariborLon}&appid=${this._apiKey}&units=metric&lang=${this.translateState.localization}`).pipe(
      startWith(JSON.parse(localStorage.getItem('weatherData') ?? '')),
      map((res: any) => {
        return res as WeatherData;
      }),
      tap((res: WeatherData) => {
        localStorage.setItem('weatherData', JSON.stringify(res));
        this.weatherData$.next(res);
        moment.locale(this.translateState.localization);
        this.timestamp$.next(moment().format('LLLL'));
      })
    ).subscribe();
  }

  getForecast(lat?: number, long?: number): void {
    this._http.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat ?? this._mariborLat}&lon=${long ?? this._mariborLon}&appid=${this._apiKey}&units=metric&lang=${this.translateState.localization}`).pipe(
      startWith(JSON.parse(localStorage.getItem('forecastData') ?? '')),
      map((res: any) => {
        return res as ForecastData;
      }),
      tap((res: ForecastData) => {
        localStorage.setItem('forecastData', JSON.stringify(res));
        this.forecastData$.next(res);
      })
    ).subscribe();
  }
}
