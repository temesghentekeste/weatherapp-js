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

  const getGeolocation = () => {
    const geolocation = new Geolocation('washington');
    geolocation
      .getGeolocation()
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return {
    init() {
      addUIComponents();
      getGeolocation();
    },
  };
})();

App.init();
