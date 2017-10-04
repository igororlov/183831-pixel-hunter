const REMAINING_LIFE_BONUS_POINTS = 50;
const WIN_GAME_BONUS_POINTS = 100;
const FAST_WIN_GAME_BONUS_POINTS = 50;
const SLOW_WIN_GAME_BONUS_POINTS = -50;
const ANSWERS_MAX_LENGTH = 10;
const REMAINING_LIVES_MAX_LENGTH = 3;
const SECONDS_PER_GAME = 30;
const FAST_ANSWER_SECONDS_LIMIT = 10;
const NORMAL_ANSWER_SECONDS_LIMIT = 20;
const SLOW_ANSWER_SECONDS_LIMIT = 30;
const MAX_FAILED_ANSWERS = 3;

export default (answers, remainingLives = 1) => {
  if (!Array.isArray(answers) || answers.length > ANSWERS_MAX_LENGTH || remainingLives > REMAINING_LIVES_MAX_LENGTH) {
    throw new Error(`Invalid input: answers has to be array of up to ${ANSWERS_MAX_LENGTH} elements and remainingLives should be less or equal than ${REMAINING_LIVES_MAX_LENGTH}`);
  }

  if (answers.length < ANSWERS_MAX_LENGTH) {
    return -1;
  }
  if (remainingLives <= 0) {
    return -1;
  }

  let points = 0;
  let failed = 0;
  for (const answer of answers) {
    if (answer > SECONDS_PER_GAME) {
      throw new Error(`Cannot have answers with more than ${SECONDS_PER_GAME} seconds.`);
    } else if (answer >= SECONDS_PER_GAME - FAST_ANSWER_SECONDS_LIMIT) { // fast
      points += WIN_GAME_BONUS_POINTS + FAST_WIN_GAME_BONUS_POINTS;
    } else if (answer >= SECONDS_PER_GAME - NORMAL_ANSWER_SECONDS_LIMIT) { // normal
      points += WIN_GAME_BONUS_POINTS;
    } else if (answer > SECONDS_PER_GAME - SLOW_ANSWER_SECONDS_LIMIT) { // slow
      points += WIN_GAME_BONUS_POINTS + SLOW_WIN_GAME_BONUS_POINTS;
    } else { // failed
      failed++;
    }
  }
  if (failed > MAX_FAILED_ANSWERS) {
    return -1;
  }

  points += remainingLives * REMAINING_LIFE_BONUS_POINTS;
  return points;
};
