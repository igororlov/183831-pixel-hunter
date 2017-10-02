const mainElement = document.querySelector(`main.central`);

export default (screenElement) => {
  // Очистить main
  mainElement.innerHTML = ``;
  // Найти шаблон и вставить содержимое
  mainElement.appendChild(screenElement);
};
