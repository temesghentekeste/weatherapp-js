const getForm = () => {
  const form = document.createElement('form');
  const html = `
  <label for="city">Enter a location for a weather info</label>
        <input type="text" name="city" class="form-control p-3"></input>
  `;

  form.innerHTML = html;
  return form;
};

export default getForm;
