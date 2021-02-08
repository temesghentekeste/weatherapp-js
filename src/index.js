import './main.scss';
import './mobile.scss';

import getForm from './components/form';
import getCard from './components/card';
import Geolocation from './api/geolocation';

const App = (() => {
  const UIContent = document.querySelector('#content');
  UIContent.classList.add('container');

  const addUIComponents = () => {
    const form = getForm();
    UIContent.append(form);

    const card = getCard();
    UIContent.append(card);
  };

  const getWeatherInfo = () => {
    const UISearchCityForm = document.querySelector('form');

    UISearchCityForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const city = UISearchCityForm.city.value.trim();
      const geolocation = new Geolocation(city);
      geolocation
        .getGeolocation()
        .then((data) => {
          let {features} = data
          features = features[0]
          let {place_name, geometry} = features;
          let { coordinates } = geometry;
        })
        .catch((err) => console.log(err));
      UISearchCityForm.reset();
    });
  };

  return {
    init() {
      addUIComponents();
      getWeatherInfo();
    },
  };
})();

App.init();
