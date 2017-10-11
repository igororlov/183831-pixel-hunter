import assert from 'assert';
import answerCode from './answerCode';
import calculateGamePoints from './calculateGamePoints';

describe(`Calculate Game Points: `, () => {
  describe(`Game lost`, () => {
    it(`should return -1 when less than 10 answers`, () => {
      assert.equal(-1, calculateGamePoints([answerCode.TIMEOUT, answerCode.TIMEOUT, answerCode.WRONG]));
    });

    it(`should return -1 when no remaining lives`, () => {
      assert.equal(-1, calculateGamePoints([
        answerCode.CORRECT,
        answerCode.CORRECT,
        answerCode.CORRECT,
        answerCode.CORRECT,
        answerCode.CORRECT,
        answerCode.CORRECT,
        answerCode.CORRECT,
        answerCode.WRONG,
        answerCode.WRONG,
        answerCode.WRONG]));
    });
  });

  describe(`Game results`, () => {
    it(`should return 1150 when all normal answers and all lives`, () => {
      assert.equal(1150, calculateGamePoints([
        answerCode.CORRECT,
        answerCode.CORRECT,
        answerCode.CORRECT,
        answerCode.CORRECT,
        answerCode.CORRECT,
        answerCode.CORRECT,
        answerCode.CORRECT,
        answerCode.CORRECT,
        answerCode.CORRECT,
        answerCode.CORRECT]));
    });

    it(`should return 1000 when 3 fast answers, 3 slow, 3 normal and one timeout`, () => {
      assert.equal(1000, calculateGamePoints([
        answerCode.FAST,
        answerCode.FAST,
        answerCode.FAST,
        answerCode.SLOW,
        answerCode.SLOW,
        answerCode.SLOW,
        answerCode.CORRECT,
        answerCode.CORRECT,
        answerCode.CORRECT,
        answerCode.TIMEOUT]));
    });
  });
});
