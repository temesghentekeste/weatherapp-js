import convertTemperature from '../events/convert_temp';
import getImage from '../utils/image';

const render = (data, city, countryName) => {
  const cityDetailsInfo = document.querySelector('.details');
  const card = document.querySelector('.card');
  const icon = document.querySelector('.icon img');
  const time = document.querySelector('img.weather-condition');

  const { main, weather } = data;
  const {
    humidity,
    pressure,
    temp,
    temp_min: tempMin,
    temp_max: tempMax,
  } = main;
  console.log(data, main, weather, weather[0].main);
  const html = `
      <h5 class="my-3">
      <!-- City Name -->
        ${city}, ${countryName}
      </h5>
      <div class="my-3">
        <!-- Weather Conditions -->
        ${weather[0].description}
      </div>
      <div class="display-4 my-4 temperature">
        <span>${temp}</span>
        <span>&deg;C</span>
      </div>
      <div class="card-footer d-flex justify-content-around align-items-center">
        <div class="min-max">
           Min: <span class="min">${tempMin}</span>
          <span>&deg;C</span>
           Max: <span class="max">${tempMax}</span>
          <span>&deg;C</span>
        </div>
        <div class="pressure">
          <span>Humidity: ${humidity}%</span>
          <span>Pressure: ${pressure}</span><span class="text-lowercase"> mb</span> 
        </div>
         <div class="wind">
          <span>Wind: 20&deg; Speed: 40</span><span class="text-lowercase">m/s</span>
        </div>
        <span class="mr-0">fahrenheit</span>
        <div class="switch ml-0">
         <input
            id="switch-1"
            type="checkbox"
            class="switch-input chk-fahrenheit"
          />
          <label for="switch-1" class="switch-label">fahrenheit</label>
        </div>
      </div>
  `;
  cityDetailsInfo.innerHTML = html;

  // setting current weather condition image
  const imgSrc = getImage(weather[0].main);
  time.setAttribute('src', imgSrc);

  const iconSrc = `http://openweathermap.org/img/w/${weather[0].icon}.png`;
  icon.setAttribute('src', iconSrc);

  if (card.classList.contains('d-none')) {
    card.classList.remove('d-none');
  }

  const UIChKFahrenheit = document.querySelector('.chk-fahrenheit');
  UIChKFahrenheit.addEventListener('change', (e) => convertTemperature(e));
};

export default render;
