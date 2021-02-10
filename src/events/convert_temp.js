import getTemperature from '../utils/temperature';
import update from '../ui/update';

const convertTemperature = (e) => {
  const UITemperature = document.querySelector('.temperature');
  const UIMin = document.querySelector('.min');
  const UIMax = document.querySelector('.max');
  console.log(UITemperature, UIMin, UIMax);

  const current = UITemperature.textContent;
  const currentMin = UIMin.textContent;
  const currentMax = UIMax.textContent;
  console.log(current, currentMin, currentMax);

  if (e.target.checked) {
    const { temp, min, max } = getTemperature(
      current,
      currentMin,
      currentMax,
      'F'
    );

    update(temp, min, max, 'F');
  } else {
    const { temp, min, max } = getTemperature(
      current,
      currentMin,
      currentMax,
      'C'
    );

    update(temp, min, max, 'C');
  }
};

export default convertTemperature;
