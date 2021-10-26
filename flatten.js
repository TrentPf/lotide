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

const flatten = function(array) {
  let newArray = [];
  for (let i of array) { //loop through outer array
    if (Array.isArray(i)) { // if element of outer array is an array
      for (let j of i) { //loop through inner array
        newArray.push(j); //push values onto new array
      }
    } else {
      newArray.push(i); //if element is not an array, push values
    }
  }

  return newArray;
};

// TEST CODE
console.log(flatten([1, 2, [3, 4], 5, [6]]));
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
console.log(flatten([1, 2, [3, 4], 5, [6]]));