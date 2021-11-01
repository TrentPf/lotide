const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3], [1, 2, 3]); // console.log(equal)
assertArraysEqual([1, 2, 3], [3, 2, 1]); // console.log(not equal)

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // console.log(equal)
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // console.log(not equal)