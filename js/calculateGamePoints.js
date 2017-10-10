export default (answers) => {
  if (answers.length < 10) {
    return -1;
  }
  let remainingLives = 3;
  let points = 0;
  for (const answer of answers) {
    switch (answer) {
      case `fail`:
        remainingLives--;
        break;
      case `slow`:
        points += 50;
        break;
      case `fast`:
        points += 150;
        break;
      case `normal`:
        points += 100;
        break;
      default:
        throw new Error(`Invalid answer type: ${answer}`);
    }
  }
  if (remainingLives <= 0) {
    return -1;
  }

  points += remainingLives * 50;
  return points;
};
