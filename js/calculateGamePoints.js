import answerCode from './answerCode';

export default (answers) => {
  if (answers.length < 10) {
    return -1;
  }
  let remainingLives = 3;
  let points = 0;
  for (const answer of answers) {
    switch (answer) {
      case answerCode.TIMEOUT:
      case answerCode.WRONG:
        remainingLives--;
        break;
      case answerCode.SLOW:
        points += 50;
        break;
      case answerCode.FAST:
        points += 150;
        break;
      case answerCode.CORRECT:
        points += 100;
        break;
      default:
        throw new Error(`Invalid answer type: ${answer}`);
    }
  }
  if (remainingLives < 0) {
    return -1;
  }

  points += remainingLives * 50;
  return points;
};
