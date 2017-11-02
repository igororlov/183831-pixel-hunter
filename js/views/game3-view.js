import AbstractView from './abstract-view';
import footer from '../footer';

export default class Game1View extends AbstractView {

  constructor(question) {
    super();
    this._question = question;
  }

  get template() {
    let gameOptions = [];
    this._question.images.forEach((image, idx) => {
      const optionIdx = idx + 1;
      gameOptions.push(`
      <div class="game__option" data-value="${idx}">
        <img src="${image}" alt="Option ${optionIdx}" width="304" height="455">
      </div>`);
    });
    return `
    <div class="game">
      <p class="game__task">${this._question.title}</p>
      <form class="game__content game__content--triple">
        ${gameOptions.join(``)}
      </form>
      <div class="stats">
      </div>
    </div>
    ${footer}`;
  }

  bind() {
    const answers = this._element.querySelectorAll(`.game__option`);
    Array.from(answers).forEach((answer) => {
      answer.addEventListener(`click`, (e) => {
        const answered = 1 * e.target.getAttribute(`data-value`);
        this.onAnswer(this._question.correctAnswer === answered);
      });
    });
  }

  onAnswer() {
  }
}
