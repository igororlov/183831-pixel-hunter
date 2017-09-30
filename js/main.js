// Соберите ссылки на все возможные DOM-элементы экранов приложения в массив

// Последовательность экранов согласно ТЗ
const screens = [
  `greeting`,
  `rules`,
  `game-1`,
  `game-2`,
  `game-3`,
  `stats`
];
// Сложить шаблоны в map по id, чтобы не зависеть от порядка в HTML
const templatesMap = {};
const templates = Array.from(document.querySelectorAll(`template`));
templates.forEach(function (template) {
  templatesMap[template.id] = template;
});

// По переданному номеру показывать экран из массива, созданного в прошлом задании
// Все содержимое шаблона, описывающего экран приложения, должно заменять содержимое блока main.central
const mainElement = document.querySelector(`main.central`);
function switchScreen(n) {
  // Очистить main
  mainElement.innerHTML = ``;
  // Найти шаблон и вставить содержимое
  const currentScreenId = screens[n];
  const template = templatesMap[currentScreenId];
  mainElement.appendChild(template.content.cloneNode(true));
}

// Покажите первый экран приложения
let currentScreen = 0;
switchScreen(currentScreen);

// Добавить обработчик клавиатурных событий на document, который будет
// по нажатию на комбинации Alt + ← и Alt + → переключать экраны на следующий и предыдущий соответственно (TODO может, наоборот?)
document.addEventListener(`keypress`, function (evt) {
  if (evt.altKey && (evt.code === "ArrowRight" || evt.code === "ArrowLeft")) {
    // Шаг влево / вправо в зависимости от нажатой стрелки
    if (evt.code === "ArrowLeft") {
      currentScreen--;
    } else {
      currentScreen++;
    }
    // Убедиться что currentScreen в пределах от 0 до screens.length
    if (currentScreen < 0) {
      currentScreen += screens.length;
    } else {
      currentScreen = currentScreen % screens.length;
    }
    // Переключить экран
    switchScreen(currentScreen);
  }
});
