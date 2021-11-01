const middle = require('../middle.js');
const assertArraysEqual = require('../assertArraysEqual.js');

console.log(middle([1, 2, 3]));
console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));

assertArraysEqual((middle([1, 2, 3, 4, 5, 6])), [3, 4]);