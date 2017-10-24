import getElementFromTemplate from './getElementFromTemplate';
import footer from './footer';

export default (question, onAnswer) => {
  const template = `
    <div class="game">
      <p class="game__task">${question.title}</p>
      <form class="game__content  game__content--wide">
        <div class="game__option">
          <img src="${question.image}" alt="Option 1" width="705" height="455">
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

  const gameScreen = getElementFromTemplate(template);

  // TODO add listeners
  const answers = gameScreen.querySelectorAll(`input[name=question1]`);
  Array.from(answers).forEach((answer) => {
    answer.addEventListener(`click`, (e) => {
      const checkedOption = gameScreen.querySelector('input[name=question1]:checked');
      onAnswer(checkedOption.value === question.correctAnswer);
    });
  });
  // TODO end

  return gameScreen;
};
