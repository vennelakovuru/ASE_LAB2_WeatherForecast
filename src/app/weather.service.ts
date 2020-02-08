import {Injectable, NgModule} from '@angular/core';
import {HttpClient, HttpClientModule, HttpErrorResponse} from '@angular/common/http';
import {BrowserModule} from "@angular/platform-browser";
import {Observable} from "rxjs";


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule
  ]
})

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private weather: Observable<Object>;

  constructor(private http: HttpClient) {
  }

  getForecastWeather(cityName) {
    let weatherUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=cfd57c7d10aa94f46ed955bb2e302c15';
    return this.http.get(weatherUrl);
  }

  getCurrentWeather(cityName) {
    let weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=cfd57c7d10aa94f46ed955bb2e302c15';
    return this.http.get(weatherUrl);
  }

}
