import answerCode from './answerCode';

export default (answers) => {
  let answersList = [];
  for (const answer of answers) {
    switch (answer) {
      case answerCode.TIMEOUT:
      case answerCode.WRONG:
        answersList.push(`<li class="stats__result stats__result--wrong"></li>`);
        break;
      case answerCode.SLOW:
        answersList.push(`<li class="stats__result stats__result--slow"></li>`);
        break;
      case answerCode.FAST:
        answersList.push(`<li class="stats__result stats__result--fast"></li>`);
        break;
      case answerCode.CORRECT:
        answersList.push(`<li class="stats__result stats__result--correct"></li>`);
        break;
      default:
        throw new Error(`Invalid answer type: ${answer}`);
    }
  }
  answersList = answersList.concat(new Array(10 - answers.length).fill(`<li class="stats__result stats__result--unknown"></li>`));
  return `<ul class="stats">${answersList.join(``)}</ul>`;
};
