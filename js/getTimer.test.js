import assert from 'assert';
import getTimer from './getTimer';

describe(`Calculate Game Points: `, () => {
  describe(`Game lost`, () => {
    it(`should have correct seconds remaining`, () => {
      assert.equal(getTimer(10).value, 10);
      assert.equal(getTimer(10).tick().value, 9);
    });

    it(`should return correct isDone depending on how many seconds left`, () => {
      assert.equal(getTimer(10).tick().isFinished(), false);
      assert.equal(getTimer(1).tick().isFinished(), true);
    });
  });
});


