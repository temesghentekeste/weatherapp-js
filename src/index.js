import './main.scss';
import './mobile.scss';

import getForm from './components/form';
import getCard from './components/card';
import Weather from './api/weather';
import Country from './api/country';
import render from './ui/weather';

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
    const { name: countryName } = response;
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
