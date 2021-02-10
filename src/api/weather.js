import { weatherAPIKey as apiKey } from './key';

class Weather {
  constructor() {
    this.baseURI = 'http://api.openweathermap.org/data/2.5/forecast';
  }


  async getWeatherConditions(city) {
    this.baseURI += `?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(this.baseURI);

    if (response.status !== 200) {
      return new Error('Unable to fetch weather conditions');
    }

    const data = await response.json();
    return data;
  }
}


export default Weather;