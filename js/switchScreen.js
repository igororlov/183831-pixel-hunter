const mainElement = document.querySelector(`main.central`);

export default (screenElement) => {
  // Очистить main
  while (mainElement.firstChild) {
    mainElement.removeChild(mainElement.firstChild);
  }
  // Найти шаблон и вставить содержимое
  mainElement.appendChild(screenElement);
};
