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

const without = function(source, remove) {
  let newArray = []; //new array to push values onto
  
  if (remove.length === 0) {
    newArray = source;
    return newArray;
  }

  for (let i of source) { // loop through source
    let j = 0;
    let found = false;

    while (j < remove.length && found === false) { //loop through remove list until a values found in source or reach end of remove
      if (remove[j] === i) { //if remove found in source, set found to true
        found = true;
      }
      if (found !== true && j === remove.length - 1 && !newArray.includes(i)) { //if haven't found remove in source, I've reached end of remove and I haven't already pushed an equal value
        newArray.push(i); //then push the value in source to the new array
      }
      j++;
    }
  }
  return newArray;
};

// TEST CODE
console.log(without([1, 2, 3], [1, 2, "3"]));
console.log(without([3, 2, 1], [1, 2, "3"]));
console.log(without(["1", "2", "3"], ["1", "2", 3]));
console.log(without([1, 2, 3], []));

assertArraysEqual(without([1, 2, 3], [2, 3]), [1]);
assertArraysEqual(without([1, 2, 3], [2, 3]), ["1"]);
assertArraysEqual(without([1, 2, 3], [2, 3]), [3]);
assertArraysEqual(without([1, 2, 3], [2, 3]), []);
assertArraysEqual(without(["1", "2", "3"], ["2", "3"]), []);