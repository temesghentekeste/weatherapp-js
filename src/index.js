import './main.scss';
import './mobile.scss';

import getForm from './components/form';
import getCard from './components/card';
import Weather from './api/weather';

const App = (() => {
  const UIContent = document.querySelector('#content');
  UIContent.classList.add('container');

  const getImage = (name) => `./src/assets/${name}.jpg`;

  const render = (data, city) => {
    const cityDetailsInfo = document.querySelector('.details');
    const card = document.querySelector('.card');
    const icon = document.querySelector('.icon img');
    const time = document.querySelector('img.weather-condition');

    const { main, weather } = data;
    console.log(main, weather);
    const html = `
      <h5 class="my-3">
      <!-- City Name -->
        ${city}
      </h5>
      <div class="my-3">
        <!-- Weather Conditions -->
        ${weather[0].description}
      </div>
      <div class="display-4 my-4">
        <span>${main.temp}</span>
        <span>&deg;C</span>
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

  const getWeatherInfo = (city) => {
    const weather = new Weather();
    weather
      .getWeatherConditions(city)
      .then((data) => {
        const {city, list} = data;
        render(list[0], city.name);
      })
      .catch((err) => console.log(err));
  };

  const loadEventListener = () => {
    const UISearchCityForm = document.querySelector('form');

    UISearchCityForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const city = UISearchCityForm.city.value.trim();
      // const geolocation = new Geolocation(city);
      // geolocation
      //   .getGeolocation()
      //   .then((data) => {
      //     console.log("******");
      //     console.log(data);
      //     let { features } = data;
      //     features = features[0];
      //     let { place_name, geometry } = features;
      //     let { coordinates } = geometry;
      //     getWeatherInfo(coordinates[1], coordinates[0], place_name);
      //   })
      //   .catch((err) => console.log(err));
      getWeatherInfo(city)
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
