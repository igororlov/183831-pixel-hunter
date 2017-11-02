import AbstractView from './abstract-view';

export default class HeaderView extends AbstractView {

  constructor(game) {
    super();
    this._game = game;
  }

  get template() {
    const headerBack = `
    <div class="header__back">
      <button class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.svg" width="101" height="44">
      </button>
    </div>`;

    let headerTemplate;
    if (this._game) {
      const headerTimer = `<h1 class="game__timer">${this._game.seconds}</h1>`;
      const headerLives = `
      <div class="game__lives">
        ${new Array(3 - this._game.lives).fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
        ${new Array(this._game.lives).fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
      </div>`;
      headerTemplate = `<header class="header">${headerBack}${headerTimer}${headerLives}</header>`;
    } else {
      headerTemplate = `<header class="header">${headerBack}</header>`;
    }
    return headerTemplate;
  }

  bind() {
    const backButton = this._element.querySelector(`.header__back`);
    backButton.onclick = (evt) => {
      evt.preventDefault();
      this.onClickBack();
    };
  }

  onClickBack() {
  }

}
