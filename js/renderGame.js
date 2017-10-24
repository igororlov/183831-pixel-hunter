import answerCode from './answerCode';
import questionType from './questionType';
import getHeader from './header';
import gameStats from './gameStats';
import renderOneImageGame from './renderOneImageGame';
import renderTwoImagesGame from './renderTwoImagesGame';
import renderThreeImagesGame from './renderThreeImagesGame';
import switchScreen from './switchScreen';
import stats from './stats';

const renderGame = (game) => {
  let answered = false;
  const onAnswer = (correct) => {
    if (answered) {
      return;
    }
    answered = true;

    console.log('in onAnswer', correct, game, 'answered: ', answered);

    game.currentQuestion++;
    game.answers.push(correct ? answerCode.CORRECT : answerCode.WRONG);
    if (!correct) {
      game.lives--;
    }

    if (game.lives > 0 && game.currentQuestion < game.questions.length) {
      switchScreen(renderGame(game));
    } else {
      switchScreen(stats);
    }
  };

  const question = game.questions[game.currentQuestion];

  console.log(game, game.currentQuestion, question.questionType);

  let gameScreen;
  switch (question.questionType) {
    case questionType.ONE_IMAGE:
      gameScreen = renderOneImageGame(question, onAnswer);
      break;
    case questionType.TWO_IMAGES:
      gameScreen = renderTwoImagesGame(question, onAnswer);
      break;
    case questionType.THREE_IMAGES:
      gameScreen = renderThreeImagesGame(question, onAnswer);
      break;
    default:
      throw new Error(`Unknown question type`);
  }

  gameScreen.insertBefore(getHeader(game), gameScreen.firstChild);

  const statsContainer = gameScreen.querySelector(`div.stats`);
  statsContainer.innerHTML = gameStats(game.answers);

  return gameScreen;
};

export default renderGame;
