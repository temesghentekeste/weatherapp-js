import './main.scss';

import getForm from './components/form';
import getCard from './components/card';
import Weather from './api/weather';
import Country from './api/country';
import render from './ui/weather';
import getLoader from './components/loader';
import showError from './ui/error';

const App = (() => {
  const UIContent = document.querySelector('#content');
  UIContent.classList.add('container');

  const addUIComponents = () => {
    const form = getForm();
    UIContent.append(form);

    const card = getCard();
    UIContent.append(card);
  };

  const getWeatherInfo = async (cityName) => {
    try {
      const weather = new Weather();

      let response = await weather.getWeatherConditions(cityName);
      const { city, list } = response;

      const country = new Country();
      response = await country.getCountry(city.country);
      const { name: countryName } = response;

      render(list[0], city.name, countryName);
    } catch {
      const error = 'Something went wrong. Please search for a valid city!';
      document.querySelector('.loading').remove();
      showError(error);
    }
  };

  const loadEventListener = () => {
    const UISearchCityForm = document.querySelector('form');

    UISearchCityForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const city = UISearchCityForm.city.value.trim();


      const loader = getLoader();
      UISearchCityForm.after(loader);
      document.querySelector('.main-card').style.display = 'none';
      setTimeout(() => {
        getWeatherInfo(city);
      }, 2000);
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
