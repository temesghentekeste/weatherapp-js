const getLoader = () => {
  const UILoaderDiv = document.createElement('div');
  UILoaderDiv.classList.add('loading', 'text-center');

  UILoaderDiv.innerHTML = `<img src="../src/assets/loading.gif" alt="Loading">`;

  return UILoaderDiv;
};

export default getLoader;
