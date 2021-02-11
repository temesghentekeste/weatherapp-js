const getLoader = () => {
  const UILoaderDiv = document.createElement('div');
  UILoaderDiv.classList.add('loading', 'text-center', 'mx-auto');

  UILoaderDiv.innerHTML = `
  <h4 class='text-info mr-2'>Loading...</h4>
  <img src="../src/assets/loading.gif" alt="Loading">
  `;

  return UILoaderDiv;
};

export default getLoader;
