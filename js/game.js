import answerCode from './answerCode';
import questionType from './questionType';
import getHeader from './header';
import gameStats from './gameStats';
import switchScreen from './switchScreen';
import stats from './stats';
import Game1View from './views/game1-view';
import Game2View from './views/game2-view';
import Game3View from './views/game3-view';
import getTimer from './getTimer';

const renderGame = (game) => {
  let answered = false;
  let timer = getTimer(30);

  const onAnswer = (correct) => {
    if (answered) {
      return;
    }

    let answer;
    if (correct && !timer.isFinished()) {
      const secondsRemaining = timer.value;
      if (secondsRemaining > 20) {
        answer = answerCode.FAST;
      } else if (secondsRemaining > 10) {
        answer = answerCode.CORRECT;
      } else {
        answer = answerCode.SLOW;
      }
    } else {
      if (timer.isFinished()) {
        answer = answerCode.TIMEOUT;
      } else {
        answer = answerCode.WRONG;
      }
    }

    answered = true;
    game.currentQuestion++;
    game.answers.push(answer);
    if (answer === answerCode.WRONG || answer === answerCode.TIMEOUT) {
      game.lives--;
    }
    if (game.lives >= 0 && game.currentQuestion < game.questions.length) {
      switchScreen(renderGame(game));
    } else {
      switchScreen(stats(game.answers));
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

  let headerElement;
  const renderHeader = (gameScreen, seconds, lives) => {
    if (headerElement) {
      headerElement.remove();
    }
    headerElement = getHeader(seconds, lives);
    gameScreen.insertBefore(headerElement, gameScreen.firstChild);
  };

  const gameScreen = gameView.element;
  renderHeader(gameScreen, timer.value, game.lives);

  const timerTick = () => {
    timer = timer.tick();
    if (timer.isFinished()) { // timeout
      onAnswer(false);
    } else {
      renderHeader(gameScreen, timer.value, game.lives);
      setTimeout(timerTick, 1000);
    }
  };
  setTimeout(timerTick, 1000);

  const statsContainer = gameScreen.querySelector(`div.stats`);
  statsContainer.innerHTML = gameStats(game.answers);

  return gameScreen;
};

export default renderGame;
