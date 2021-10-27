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

const middle = function(array) {
  let middleArray = [];
  if (array.length < 3) {
    return middleArray;
  }

  let middleIndex = Math.floor(array.length / 2);

  if (array.length % 2 === 0) {
    middleArray.push(array[middleIndex - 1], array[middleIndex]);
  } else {
    middleArray.push(array[middleIndex]);
  }
  return middleArray;
};


// TEST CODE
console.log(middle([1, 2, 3]));
console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));

assertArraysEqual((middle([1, 2, 3, 4, 5, 6])), [3, 4]);