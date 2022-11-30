import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WeatherService } from './services/weather.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { LocationTagComponent } from './components/location-tag/location-tag.component';
import { MatButtonModule } from '@angular/material/button';
import { ForecastComponent } from './components/forecast/forecast.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent,
    LocationTagComponent,
    ForecastComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatButtonModule,
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
