import { weatherAPIKey as apiKey} from './key';
class Weather {
  constructor() {
    this.baseURI = `https://api.openweathermap.org/data/2.5/weather`;
  }

  async getWeatherConditions(lat, lon) {
    this.baseURI += `?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    const response = await fetch(this.baseURI);

    if( response.status !== 200) {
     return new Error('Unable to fetch weather conditions');
    }
    
     const data = await response.json();
     return data;
  }
};


export default Weather;