const showError = (error) => {
  const UIerrorDiv = document.createElement('div');

  const UIMainContentDiv = document.querySelector('#content');
  const UIheading = document.querySelector('.heading');

  UIerrorDiv.className = 'alert alert-danger';
  UIerrorDiv.appendChild(document.createTextNode(error));

  UIMainContentDiv.insertBefore(UIerrorDiv, UIheading);

  setTimeout(() => {
    document.querySelector('.alert').remove();
  }, 3000);
};

export default showError;

