import answerCode from './answerCode';
import questionType from './questionType';
import getHeader from './header';
import gameStats from './gameStats';
// import renderOneImageGame from './game1';
// import renderTwoImagesGame from './game2';
// import renderThreeImagesGame from './game3';
import switchScreen from './switchScreen';
import stats from './stats';

import Game1View from './game1-view';
import Game2View from './game2-view';
import Game3View from './game3-view';

const renderGame = (game) => {
  let answered = false;
  const onAnswer = (correct) => {
    if (answered) {
      return;
    }
    answered = true;

    game.currentQuestion++;
    game.answers.push(correct ? answerCode.CORRECT : answerCode.WRONG);
    if (!correct) {
      game.lives--;
    }

    if (game.lives > 0 && game.currentQuestion < game.questions.length) {
      switchScreen(renderGame(game));
    } else {
      switchScreen(stats());
    }
  };

  const question = game.questions[game.currentQuestion];
  let GameViewClass;

  switch (question.questionType) {
    case questionType.ONE_IMAGE:
      GameViewClass = Game1View;
      break;
    case questionType.TWO_IMAGES:
      GameViewClass = Game2View;
      break;
    case questionType.THREE_IMAGES:
      GameViewClass = Game3View;
      break;
    default:
      throw new Error(`Unknown question type`);
  }

  const gameView = new GameViewClass(question);
  gameView.onAnswer = onAnswer;
  const gameScreen = gameView.element;
  gameScreen.insertBefore(getHeader(game), gameScreen.firstChild);

  const statsContainer = gameScreen.querySelector(`div.stats`);
  statsContainer.innerHTML = gameStats(game.answers);

  return gameScreen;
};

export default renderGame;
