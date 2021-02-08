import { weatherAPIKey as apiKey} from './key';
class Weather {
  constructor() {
    this.baseURI = `api.openweathermap.org/data/2.5/weather`;
  }

  async getWeatherConditions(lat, lon) {
    this.baseURI += `?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    const response = await fetch(this.baseURI);

    if( response.status !== 200) {
     return new Error('Unable to fetch Location information');
    }
    
     const data = await response.json();
     return data[0];
  }
};


export default Weather;