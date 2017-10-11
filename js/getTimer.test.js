import assert from 'assert';
import getTimer from './getTimer';

describe(`Timer behaviour `, () => {
  it(`should have correct seconds remaining on creation or tick`, () => {
    assert.equal(getTimer(10).value, 10);
    assert.equal(getTimer(10).tick().value, 9);
  });

  it(`should return correct isFinished depending on how many seconds left`, () => {
    assert.equal(getTimer(10).tick().isFinished(), false);
    assert.equal(getTimer(1).tick().isFinished(), true);
  });

  it(`should reset to correct amount of seconds`, () => {
    assert.equal(getTimer(5).tick().reset().value, 30);
  });

  it(`should not get negative amount of seconds on many ticks`, () => {
    assert.equal(getTimer(2).tick().tick().tick().tick().value, 0);
  });
});


