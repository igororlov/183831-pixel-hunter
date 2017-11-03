const mainElement = document.querySelector(`main.central`);

export default (screenElement) => {
  while (mainElement.firstChild) {
    mainElement.removeChild(mainElement.firstChild);
  }
  mainElement.appendChild(screenElement);
};
