import './main.scss';
import './mobile.scss';

import getForm from './components/form';
import getCard from './components/card';

const App = (() => {

  const UIContent = document.querySelector('#content');
  UIContent.classList.add('container');

  const addUIComponents = () => {
    const form = getForm();
    UIContent.append(form)

    const card = getCard();
    UIContent.append(card)
  }

  return {
    init() {
      addUIComponents();
      console.log('Starting');
    }
  }
})();

App.init();