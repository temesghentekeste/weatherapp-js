import { weatherAPIKey as apiKey } from './key';

class Weather {
  constructor() {
    this.baseURI = 'http://api.openweathermap.org/data/2.5/forecast';
  }


  async getWeatherConditions(city) {
    this.baseURI += `?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(this.baseURI);

    if (response.status !== 200) {
      return new Error('Something went wrong, please try again!');
    }

    const data = await response.json();
    return data;
  }
}


export default Weather;