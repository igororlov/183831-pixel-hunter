// Соберите ссылки на все возможные DOM-элементы экранов приложения в массив

// Последовательность экранов согласно ТЗ
const screens = [
  document.getElementById(`greeting`),
  document.getElementById(`rules`),
  document.getElementById(`game-1`),
  document.getElementById(`game-2`),
  document.getElementById(`game-3`),
  document.getElementById(`stats`)
];

// По переданному номеру показывать экран из массива, созданного в прошлом задании
// Все содержимое шаблона, описывающего экран приложения, должно заменять содержимое блока main.central
const mainElement = document.querySelector(`main.central`);
function switchScreen(n) {
  // Очистить main
  mainElement.innerHTML = ``;
  // Найти шаблон и вставить содержимое
  mainElement.appendChild(screens[n].content.cloneNode(true));
}

// Покажите первый экран приложения
let currentScreen = 0;
switchScreen(currentScreen);

// Добавить обработчик клавиатурных событий на document, который будет
// по нажатию на комбинации Alt + ← и Alt + → переключать экраны на следующий и предыдущий соответственно (TODO может, наоборот?)
document.addEventListener(`keydown`, function (evt) {
  if (evt.altKey && (evt.code === "ArrowRight" || evt.code === "ArrowLeft")) {
    // Шаг влево / вправо в зависимости от нажатой стрелки
    if (evt.code === "ArrowLeft") {
      if (currentScreen > 0) {
        currentScreen--;
      }
    } else if (currentScreen < screens.length - 1) {
      currentScreen++;
    }

    // Переключить экран
    switchScreen(currentScreen);
  }
});
