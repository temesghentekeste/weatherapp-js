import getTemperature from '../utils/temperature';

const convertTemperature = (e) => {
    const UIMinMax = document.querySelector('.min-max');
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

      UITemperature.innerHTML = `
        <span>${temp}</span>
        <span>&deg;F</span>
        `;

      UIMinMax.innerHTML = `
              <div className="min-max">
                Min: <span class="min">${min}</span>
                <span>&deg;C</span>
                Max: <span class="max">${max}</span>
                <span>&deg;F</span>
              </div>
        `;
    } else {
      const { temp, min, max } = getTemperature(
        current,
        currentMin,
        currentMax,
        'C'
      );

      UITemperature.innerHTML = `
          <span>${temp}</span>
        <span>&deg;C</span>
          `;

      UIMinMax.innerHTML = `
              <div className="min-max">
                Min: <span class="min">${min}</span>
                <span>&deg;C</span>
                Max: <span class="max">${max}</span>
                <span>&deg;C</span>
              </div>
        `;
    }
};

export default convertTemperature;
