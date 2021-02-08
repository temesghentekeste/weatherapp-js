const getCard = () => {
  const card = document.createElement('div');
  card.classList.add('card', 'rounded', 'd-none');
  
  const html = `
        <img src="https://via.placeholder.com/150" class="time card-img-top img-fluid">
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
          <div class="display-4 my-2">
            <span>Temp</span>
            <span>&deg;C</span>
          </div>
        </div>
  `;

  card.innerHTML = html;
  
  return card;
}

export default getCard;