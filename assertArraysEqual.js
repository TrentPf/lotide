const eqArrays = function(array1, array2) { //check if arrays are exactly equal

  if (array1.length !== array2.length) { //if arrays are different lengths, automatic false
    return false;
  }

  for (let i = 0; i < array1.length; i++) { //if there's ever a difference in elements, return a false
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true; //if it's made it through both false checks, then they're are exactly equal: return true
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("👌👌👌 First array is exactly equal to second.");
  } else {
    console.log("😡😡😡 First array is not exactly equal to second.");
  }
};

// TEST CODE

assertArraysEqual([1, 2, 3], [1, 2, 3]); // console.log(equal)
assertArraysEqual([1, 2, 3], [3, 2, 1]); // console.log(not equal)

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // console.log(equal)
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // console.log(not equal)
