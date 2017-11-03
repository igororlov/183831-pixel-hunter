import AbstractView from './abstract-view';
import getHeader from '../header';
import footer from '../footer';
import calculateGamePoints from '../calculateGamePoints';
import gameStats from '../gameStats';
import answerCode from '../answerCode';

export default class StatsView extends AbstractView {

  constructor(answers) {
    super();
    this._answers = answers;
  }

  getFastAnswersTemplate() {
    const fastAnswers = this._answers.reduce((n, answer) => n + (answer === answerCode.FAST), 0);
    return fastAnswers === 0 ? `` :
      `<tr>
          <td></td>
          <td class="result__extra">Бонус за скорость:</td>
          <td class="result__extra">${fastAnswers}&nbsp;<span class="stats__result stats__result--fast"></span></td>
          <td class="result__points">×&nbsp;50</td>
          <td class="result__total">${fastAnswers * 50}</td>
        </tr>`;
  }

  getSlowAnswersTemplate() {
    const slowAnswers = this._answers.reduce((n, answer) => n + (answer === answerCode.SLOW), 0);
    return slowAnswers === 0 ? `` :
      `<tr>
          <td></td>
          <td class="result__extra">Штраф за медлительность:</td>
          <td class="result__extra">${slowAnswers}&nbsp;<span class="stats__result stats__result--slow"></span></td>
          <td class="result__points">×&nbsp;50</td>
          <td class="result__total">-${slowAnswers * 50}</td>
        </tr>`;
  }

  getRemainingLivesTemplate() {
    const remainingLives = 3 - this._answers.reduce((n, answer) => n + (answer < 0), 0);
    return remainingLives === 0 ? `` :
      `<tr>
          <td></td>
          <td class="result__extra">Бонус за жизни:</td>
          <td class="result__extra">${remainingLives}&nbsp;<span class="stats__result stats__result--alive"></span></td>
          <td class="result__points">×&nbsp;50</td>
          <td class="result__total">${remainingLives * 50}</td>
        </tr>`;
  }

  getGameResultTemplate(gamePoints) {
    if (gamePoints < 0) {
      return `
        <table class="result__table">
          <tr>
            <td class="result__number">1.</td>
            <td>
              ${gameStats(this._answers)}
            </td>
            <td class="result__total"></td>
            <td class="result__total  result__total--final">fail</td>
          </tr>
        </table>`;
    } else {
      const correctAnswers = this._answers.reduce((n, answer) => n + (answer > 0), 0);
      return `
      <table class="result__table">
        <tr>
          <td class="result__number">1.</td>
          <td colspan="2">
            ${gameStats(this._answers)}
          </td>
          <td class="result__points">×&nbsp;100</td>
          <td class="result__total">${correctAnswers * 100}</td>
        </tr>
        ${this.getFastAnswersTemplate()}
        ${this.getRemainingLivesTemplate()}
        ${this.getSlowAnswersTemplate()}
        <tr>
          <td colspan="5" class="result__total  result__total--final">${gamePoints}</td>
        </tr>
      </table>`;
    }
  }

  get template() {
    const gamePoints = calculateGamePoints(this._answers);
    const title = gamePoints < 0 ? `Проигрыш!` : `Победа!`;
    return `
      <div class="result">
        <h1>${title}</h1>
        ${this.getGameResultTemplate(gamePoints)}
      </div>
      ${footer}`;
  }

  render() {
    const _element = super.render();
    _element.insertBefore(getHeader(), _element.firstChild);
    return _element;
  }
}
