import getElementFromTemplate from './getElementFromTemplate';
import footer from './footer';

export default (question, onAnswer) => {

  console.log('in renderTwoImagesGame, question:', question);

  let gameOptions = [];
  question.images.forEach((image, idx) => {
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
  const template = `
    <div class="game">
      <p class="game__task">${question.title}</p>
      <form class="game__content">
        ${gameOptions.join(``)}
      </form>
      <div class="stats">
      </div>
    </div>
    ${footer}`;

  const gameScreen = getElementFromTemplate(template);

  // TODO add listeners
  const checkAnswers = (e) => {
    const checkedAnswer1 = gameScreen.querySelector(`input[name="question1"]:checked`);
    const checkedAnswer2 = gameScreen.querySelector(`input[name="question2"]:checked`);
    console.log('in checkAnswers', checkedAnswer1, checkedAnswer2, e);
    if (checkedAnswer1 && checkedAnswer2) {
      onAnswer(true);
    }
  };

  const answers = gameScreen.querySelectorAll(`.game__answer`);
  Array.from(answers).forEach((answer) => {
    answer.addEventListener(`click`, checkAnswers);
  });
  // TODO end

  return gameScreen;
};
