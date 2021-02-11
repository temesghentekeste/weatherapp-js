const update = (temp, min, max, scale) => {
  const UIMinMax = document.querySelector('.min-max');
  const UITemperature = document.querySelector('.temperature');
  UITemperature.innerHTML = `
        <span>${temp}</span>
        <span>&deg;${scale}</span>
        `;

  UIMinMax.innerHTML = `
    <div className="min-max">
      Min: <span class="min">${min}</span>
      <span>&deg;${scale}</span>
      Max: <span class="max">${max}</span>
      <span>&deg;${scale}</span>
    </div>
  `;
};

export default update;
