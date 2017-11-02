import AbstractView from './abstract-view';
import footer from '../footer';

export default class Game2View extends AbstractView {

  constructor(question) {
    super();
    this._question = question;
  }

  get template() {
    let gameOptions = [];
    this._question.images.forEach((image, idx) => {
      const optionIdx = idx + 1;
      gameOptions.push(`<div class="game__option">
          <img src="${image}" alt="Option ${optionIdx}" width="468" height="458">
          <label class="game__answer game__answer--photo">
            <input name="question${optionIdx}" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer game__answer--paint">
            <input name="question${optionIdx}" type="radio" value="paint">
            <span>Рисунок</span>
          </label>
        </div>`);
    });
    return `
    <div class="game">
      <p class="game__task">${this._question.title}</p>
      <form class="game__content">
        ${gameOptions.join(``)}
      </form>
      <div class="stats">
      </div>
    </div>
    ${footer}`;
  }

  bind() {
    const checkAnswers = () => {
      const checkedAnswer1 = this._element.querySelector(`input[name="question1"]:checked`);
      const checkedAnswer2 = this._element.querySelector(`input[name="question2"]:checked`);
      if (checkedAnswer1 && checkedAnswer2) {
        const firstCorrect = this._question.correctAnswer[0] === checkedAnswer1.value;
        const secondCorrect = this._question.correctAnswer[1] === checkedAnswer2.value;
        this.onAnswer(firstCorrect && secondCorrect);
      }
    };

    const answers = this._element.querySelectorAll(`.game__answer`);
    Array.from(answers).forEach((answer) => {
      answer.addEventListener(`click`, checkAnswers);
    });
  }

  onAnswer() {
  }
}
