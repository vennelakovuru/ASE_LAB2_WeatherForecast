import {Component, OnInit} from '@angular/core';
import {WeatherService} from './weather.service';
import {Observable} from "rxjs";


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.less']
})

export class WeatherComponent implements OnInit {
  constructor(private weatherService: WeatherService) {
  }

  cityName = '';
  currentWeatherInfo = null;
  forecastWeatherInfo = null;
  weatherInfo = null;

  getWeather(): void {
    this.weatherService.getForecastWeather(this.cityName).subscribe(data => {
      this.weatherInfo = data;
      this.forecastWeatherInfo = this.weatherInfo.list.slice(0, 5);
    })
    this.weatherService.getCurrentWeather(this.cityName).subscribe(data => {
      this.currentWeatherInfo = data;
    })
  }

  ngOnInit() {
  }

}
