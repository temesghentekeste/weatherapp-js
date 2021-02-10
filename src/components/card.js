const getCard = () => {
  const card = document.createElement('div');
  card.classList.add('card', 'rounded', 'd-none');

  const html = `
        <img src="https://via.placeholder.com/150" class="weather-condition card-img-top img-fluid">
        <div class="icon bg-light mx-auto text-center">
          <!-- Weather Icon -->
          <img src="" alt="">
        </div>
        <div class="text-muted text-uppercase text-center details">
          <h5>
            <!-- City Name -->
            City Name
          </h5>
          <div class="my-3">
            <!-- Weather Conditions -->
            Weather Conditions
          </div>
          <div class="display-4 my-2 temperature">
            <span>Temp</span>
            <span>&deg;C</span>
          </div>
          <div class="card-footer">
            <div class="min-max">
             Min: <span class="min">20</span><span>&deg;C</span>
             Max: <span class="max">40</span><span>&deg;C</span>
            </div>
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

  card.innerHTML = html;

  return card;
};

export default getCard;
