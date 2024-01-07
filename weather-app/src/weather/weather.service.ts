/* eslint-disable prettier/prettier */
// src/weather/weather.service.ts
import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class WeatherService {
  async getWeather(city: string): Promise<any> {
    const apiKey: string = process.env.WEATHER_API;
    const apiUrl: string = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = await axios.get(apiUrl);
    return response.data;
  }
}