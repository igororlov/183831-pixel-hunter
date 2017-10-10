import assert from 'assert';
import calculateGamePoints from './calculateGamePoints';

describe(`Calculate Game Points: `, () => {
  describe(`Game lost`, () => {
    it(`should return -1 when less than 10 answers`, () => {
      assert.equal(-1, calculateGamePoints([`fail`, `fail`, `fail`]));
    });

    it(`should return -1 when no remaining lives`, () => {
      assert.equal(-1, calculateGamePoints([`normal`, `normal`, `normal`, `normal`, `normal`, `normal`, `normal`, `fail`, `fail`, `fail`]));
    });
  });

  describe(`Game results`, () => {
    it(`should return 1150 when all normal answers and all lives`, () => {
      assert.equal(1150, calculateGamePoints([`normal`, `normal`, `normal`, `normal`, `normal`, `normal`, `normal`, `normal`, `normal`, `normal`]));
    });
  });
});

describe(`Incorrect input`, () => {
  it(`should throw an error when more than 10 answers`, () => {
    assert.throws(() => {
      calculateGamePoints([`normal`, `BAZUKA`, `normal`, `normal`, `normal`, `normal`, `normal`, `fail`, `fail`, `fail`]);
    }, Error, `I throw`);
  });
});
