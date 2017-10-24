import getElementFromTemplate from './getElementFromTemplate';
import footer from './footer';

export default (question, onAnswer) => {
  let gameOptions = [];
  question.images.forEach((image, idx) => {
    const optionIdx = idx + 1;
    gameOptions.push(`
      <div class="game__option">
        <img src="${image}" alt="Option ${optionIdx}" width="304" height="455">
      </div>`);
  });
  const template = `
    <div class="game">
      <p class="game__task">${question.title}</p>
      <form class="game__content game__content--triple">
        ${gameOptions.join(``)}
      </form>
      <div class="stats">
      </div>
    </div>
    ${footer}`;

  const gameScreen = getElementFromTemplate(template);

  // TODO add listeners and checking
  const answers = gameScreen.querySelectorAll(`.game__option`);
  Array.from(answers).forEach((answer) => {
    answer.addEventListener(`click`, (() => onAnswer(true)), true, true); // TODO check in FF
  });
  // TODO end

  return gameScreen;
};
