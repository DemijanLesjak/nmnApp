import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { WeatherData } from '../../models/WeatherData';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private readonly _apiKey: string = '950f39172926f5201c8a6c308454982e';
  private readonly _mariborLat: string = '46.555';
  private readonly _mariborLon: string = '15.647';
  public weatherData$: BehaviorSubject<WeatherData | null> = new BehaviorSubject<WeatherData | null>(null);

  constructor(
    private _http: HttpClient
  ) {
  }

  getWeather(): void {
    this._http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this._mariborLat}&lon=${this._mariborLon}&appid=${this._apiKey}&units=metric`).pipe(
      map((res: any) => {
        return res as WeatherData;
      }),
      tap((res: WeatherData) => {
        this.weatherData$.next(res);
      })
    ).subscribe();
  }
}
