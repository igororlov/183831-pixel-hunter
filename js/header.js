import getElementFromTemplate from './getElementFromTemplate';
import switchScreen from './switchScreen';
import greeting from './greeting';

export default (game) => {
  const headerBack = `
    <div class="header__back">
      <button class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.svg" width="101" height="44">
      </button>
    </div>`;

  let headerTemplate;
  if (game) {
    const headerTimer = `<h1 class="game__timer">${game.seconds}</h1>`;
    const headerLives = `
      <div class="game__lives">
        ${new Array(3 - game.lives).fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
        ${new Array(game.lives).fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
      </div>`;
    headerTemplate = `<header class="header">${headerBack}${headerTimer}${headerLives}</header>`;
  } else {
    headerTemplate = `<header class="header">${headerBack}</header>`;
  }

  const header = getElementFromTemplate(headerTemplate);

  const backButton = header.querySelector(`.header__back`);
  backButton.addEventListener(`click`, () => {
    switchScreen(greeting);
  });

  return header;
};
