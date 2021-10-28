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

const takeUntil = function(array, callback) {
  let results = [];
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) {
      results.push(array[i]);
    } else {
      return results;
    }
  }
  return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual([1, 2, 5, 7, 2], results1);
assertArraysEqual(["I've", "been", "to", "Hollywood"], results2);
