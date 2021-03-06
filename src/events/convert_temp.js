import getTemperature from '../utils/temperature';
import update from '../ui/update';

const convertTemperature = (e) => {
  const UITemperature = document.querySelector('.temperature');
  const UIMin = document.querySelector('.min');
  const UIMax = document.querySelector('.max');

  const current = UITemperature.textContent;
  const currentMin = UIMin.textContent;
  const currentMax = UIMax.textContent;

  if (e.target.checked) {
    const { temp, min, max } = getTemperature(
      current,
      currentMin,
      currentMax,
      'F',
    );

    update(temp, min, max, 'F');
  } else {
    const { temp, min, max } = getTemperature(
      current,
      currentMin,
      currentMax,
      'C',
    );

    update(temp, min, max, 'C');
  }
};

export default convertTemperature;
