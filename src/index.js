import './main.scss';
import './mobile.scss';

import getForm from './components/form';
import getCard from './components/card';
import Weather from './api/weather';
import Country from './api/country';

const App = (() => {
  const UIContent = document.querySelector('#content');
  UIContent.classList.add('container');

  const getImage = (name) => `./src/assets/${name}.jpg`;

  const render = (data, city, countryName) => {
    const cityDetailsInfo = document.querySelector('.details');
    const card = document.querySelector('.card');
    const icon = document.querySelector('.icon img');
    const time = document.querySelector('img.weather-condition');

    const { main, weather } = data;
    const { humidity, pressure, temp, temp_min, temp_max } = main;
    console.log(data, main, weather, weather[0].main);
    const html = `
      <h5 class="my-3">
      <!-- City Name -->
        ${city}, ${countryName}
      </h5>
      <div class="my-3">
        <!-- Weather Conditions -->
        ${weather[0].description}
      </div>
      <div class="display-4 my-4">
        <span>${temp}</span>
        <span>&deg;C</span>
      </div>
      <div class="card-footer d-flex justify-content-around">
        <div className="min">
           Min: <span>${temp_min}</span>
          <span>&deg;C</span>
           Max: <span>${temp_max}</span>
          <span>&deg;C</span>
        </div>
        <div className="pressure">
          <span>Humidity: ${humidity}%</span>
          <span>Pressure: ${pressure}</span><span class="text-lowercase"> mb</span> 
        </div>
         <div className="wind">
          <span>Wind: 20&deg; Speed: 40m/s</span>
        </div>
      </div>
  `;
    cityDetailsInfo.innerHTML = html;

    // setting current weather condition image
    const imgSrc = getImage(weather[0].main);
    time.setAttribute('src', imgSrc);

    const iconSrc = `http://openweathermap.org/img/w/${weather[0].icon}.png`;
    icon.setAttribute('src', iconSrc);

    if (card.classList.contains('d-none')) {
      card.classList.remove('d-none');
    }
  };

  const addUIComponents = () => {
    const form = getForm();
    UIContent.append(form);

    const card = getCard();
    UIContent.append(card);
  };

  const getWeatherInfo = async (cityName) => {
    const weather = new Weather();
    // weather
    //   .getWeatherConditions(city)
    //   .then((data) => {
    //     const { city, list } = data;
    //     render(list[0], city.name, city.country);
    //   })
    //   .catch((err) => console.log(err));

    let response = await weather.getWeatherConditions(cityName);
    const { city, list } = response;
    const country = new Country();
    response = await country.getCountry(city.country);
    let { name: countryName } = response;
    render(list[0], city.name, countryName);
  };

  const loadEventListener = () => {
    const UISearchCityForm = document.querySelector('form');

    UISearchCityForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const city = UISearchCityForm.city.value.trim();

      getWeatherInfo(city);
      UISearchCityForm.reset();
    });
  };

  return {
    init() {
      addUIComponents();
      loadEventListener();
    },
  };
})();

App.init();
