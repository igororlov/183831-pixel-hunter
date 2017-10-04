import assert from 'assert';
import calculateGamePoints from '../calculateGamePoints';

describe(`Calculate Game Points: `, () => {
  describe(`Game lost`, () => {
    it(`should return -1 when less than 10 answers`, () => {
      assert.equal(-1, calculateGamePoints([1, 2, 3], 1));
      assert.equal(-1, calculateGamePoints([], 2));
    });

    it(`should return -1 when no remaining lives`, () => {
      assert.equal(-1, calculateGamePoints(Array(10).fill(10), 0));
    });

    it(`should return -1 when too many failed answers`, () => {
      assert.equal(-1, calculateGamePoints(Array(5).fill(20).concat(Array(5).fill(0)), 2));
    });

  });

  describe(`Game results`, () => {
    it(`should return 1150 when all normal answers and all lives`, () => {
      assert.equal(1150, calculateGamePoints(Array(10).fill(15), 3));
    });
  });
});

describe(`Incorrect input data `, () => {
  it(`should throw an error when more than 10 answers`, () => {
    assert.throws(() => {
      calculateGamePoints(Array(15).fill(20), 2);
    }, Error, `I throw`);
    assert.throws(() => {
      calculateGamePoints(Array(11).fill(20), 2);
    }, Error, `I throw`);
  });

  it(`should throw an error when some answer has more than 30 seconds`, () => {
    assert.throws(() => {
      calculateGamePoints(Array(10).fill(35), 1);
    }, Error, `I throw`);
  });

  it(`should throw an error when answers is not an array`, () => {
    assert.throws(() => {
      calculateGamePoints(null, 2);
    }, Error, `I throw`);
  });

  it(`should throw an error when too many remaining lives`, () => {
    assert.throws(() => {
      calculateGamePoints(Array(10).fill(25), 4);
    }, Error, `I throw`);
  });
});
