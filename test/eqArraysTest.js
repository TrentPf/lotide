// TEST CODE
const { expect } = require('chai');
const eqArrays = require('../eqArrays');

describe('#eqArrays', function() {

  it('returns true for identical number arrays', function() {
    expect(eqArrays([1, 2, 3], [1, 2, 3])).to.equal(true);
  });

  it('returns false for arrays with different element orders', function() {
    expect(eqArrays([1, 2, 3], [3, 2, 1])).to.equal(false);
  });

  it('returns true for identical string arrays', function() {
    expect(eqArrays(["1", "2", "3"], ["1", "2", "3"])).to.equal(true);
  });

  it('returns false when corresponding element types differ', function() {
    expect(eqArrays(["1", "2", "3"], ["1", "2", 3])).to.equal(false);
  });

  it('returns false for arrays with different lengths', function() {
    expect(eqArrays([1, 2, 3], [1, 2])).to.equal(false);
  });

  it('returns true for two empty arrays', function() {
    expect(eqArrays([], [])).to.equal(true);
  });

});