import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { WeatherData } from '../../models/WeatherData';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private readonly _apiKey: string = '950f39172926f5201c8a6c308454982e';
  private readonly _mariborLat: string = '46.555';
  private readonly _mariborLon: string = '15.647';

  constructor(
    private _http: HttpClient
  ) {
  }

  getWeather(): Observable<WeatherData> {
    return this._http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this._mariborLat}&lon=${this._mariborLon}&appid=${this._apiKey}`).pipe(
      map((res: any) => {
        return res as WeatherData;
      })
    );
  }
}
