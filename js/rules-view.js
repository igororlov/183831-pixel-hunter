import AbstractView from './abstract-view';
import getHeader from './header';
import footer from './footer';

export default class RulesView extends AbstractView {

  get template() {
    return `
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
    </div>
    ${footer}`;
  }

  render() {
    const _element = super.render();
    _element.insertBefore(getHeader(), _element.firstChild);
    return _element;
  }

  bind() {
    const backButton = this._element.querySelector(`.header__back`);
    backButton.onclick = (evt) => {
      evt.preventDefault();
      this.onClickBack();
    };

    const rulesButton = this._element.querySelector(`.rules__button`);
    this.nameInput.addEventListener(`input`, () => {
      rulesButton.disabled = !this.nameInput.value;
    });

    rulesButton.onclick = (evt) => {
      evt.preventDefault();
      this.onButtonClick();
    };
  }

  get nameInput() {
    if (this._nameInput) {
      return this._nameInput;
    }
    this._nameInput = this.element.querySelector(`.rules__input`);
    return this._nameInput;
  }

  onButtonClick() {
  }
}
