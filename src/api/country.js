class Country {
  constructor() {
    this.baseURI = 'https://restcountries.eu/rest/v2/alpha/';
  }

  async getCountry(code) {
    this.baseURI += `${code}`;

    const response = await fetch(this.baseURI);

    if (response.status !== 200) {
      return new Error('Unable to fetch country name');
    }

    const data = await response.json();

    return data;
  }
}

export default Country;
