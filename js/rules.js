import getElementFromTemplate from './getElementFromTemplate';
import switchScreen from './switchScreen';
import getHeader from './header';
import footer from './footer';
import renderGame from './game';
import getGame from './state';

const rulesTemplate = `
<div class="rules">
  <h1 class="rules__title">Правила</h1>
  <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
    src="img/photo_icon.png" width="16" height="16"> или рисунок <img
    src="img/paint_icon.png" width="16" height="16" alt="">.<br>
    Фотографиями или рисунками могут быть оба изображения.<br>
    На каждую попытку отводится 30 секунд.<br>
    Ошибиться можно не более 3 раз.<br>
    <br>
    Готовы?
  </p>
  <form class="rules__form">
    <input class="rules__input" type="text" placeholder="Ваше Имя">
    <button class="rules__button  continue" type="submit" disabled>Go!</button>
  </form>
</div>`;

const rulesScreen = getElementFromTemplate(`
${rulesTemplate}
${footer}`);

rulesScreen.insertBefore(getHeader(), rulesScreen.firstChild);

const rulesButton = rulesScreen.querySelector(`.rules__button`);
const nameInput = rulesScreen.querySelector(`.rules__input`);
nameInput.addEventListener(`input`, () => {
  rulesButton.disabled = !nameInput.value;
});

rulesButton.addEventListener(`click`, (e) => {
  // switchScreen(game1);
  e.preventDefault();
  nameInput.value = null;
  switchScreen(renderGame(getGame(nameInput.value)));
});

export default rulesScreen;
