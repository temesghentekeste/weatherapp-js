import { geolocationAPIKey as apiKey} from './key';
class GeoLocation {
  constructor(city) {
    this.baseURI = `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?limit=1&access_token=${apiKey}`;
  }

  async getGeolocation() {
    const response = await fetch(this.baseURI);
    if( response.status !== 200) {
     return new Error('Unable to fetch Location information');
    }
    return response.json();
  }
};


export default GeoLocation;