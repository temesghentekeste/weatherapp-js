import './main.scss';
import './mobile.scss';

import getForm from './components/form';
import getCard from './components/card';
import Geolocation from './api/geolocation';
import Weather from './api/weather';

const App = (() => {
  const UIContent = document.querySelector('#content');
  UIContent.classList.add('container');

  const addUIComponents = () => {
    const form = getForm();
    UIContent.append(form);

    const card = getCard();
    UIContent.append(card);
  };

  const getWeatherInfo = (lat, lon) => {
    const weather = new Weather();
    weather
      .getWeatherConditions(lat, lon)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  const loadEventListener = () => {
    const UISearchCityForm = document.querySelector('form');

    UISearchCityForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const city = UISearchCityForm.city.value.trim();
      const geolocation = new Geolocation(city);
      geolocation
        .getGeolocation()
        .then((data) => {
          let { features } = data;
          features = features[0];
          let { place_name, geometry } = features;
          let { coordinates } = geometry;
          getWeatherInfo(coordinates[1], coordinates[0]);
        })
        .catch((err) => console.log(err));
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
