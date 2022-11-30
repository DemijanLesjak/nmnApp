import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WeatherService } from './services/weather.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { LocationTagComponent } from './components/location-tag/location-tag.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent,
    LocationTagComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
