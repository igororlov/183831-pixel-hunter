import AbstractView from './abstract-view';
import footer from './footer';

export default class Game1View extends AbstractView {

  constructor(question) {
    super();
    this._question = question;
  }

  get template() {
    return `
    <div class="game">
      <p class="game__task">${this._question.title}</p>
      <form class="game__content  game__content--wide">
        <div class="game__option">
          <img src="${this._question.image}" alt="Option 1" width="705" height="455">
          <label class="game__answer  game__answer--photo">
            <input name="question1" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer  game__answer--wide  game__answer--paint">
            <input name="question1" type="radio" value="paint">
            <span>Рисунок</span>
          </label>
        </div>
      </form>
      <div class="stats">
      </div>
    </div>
    ${footer}`;
  }

  bind() {
    const answers = this._element.querySelectorAll(`input[name=question1]`);
    Array.from(answers).forEach((answer) => {
      answer.addEventListener(`click`, () => {
        const checkedOption = this._element.querySelector(`input[name=question1]:checked`);
        this.onAnswer(checkedOption.value === this._question.correctAnswer);
      });
    });
  }

  onAnswer() {
  }
}
