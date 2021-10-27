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


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);

  if (object1Keys.length !== object2Keys.length) { // If not same amount of keys, return false
    return false;
  }

  for (let key of object1Keys) { // Loop through keys of one of the arrays
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) { // if property is an array in both objects
      if (!eqArrays(object1[key], object2[key])) { // check if the arrays in both objects are unequal, return false if so
        return false;
      }
    } else if (object1[key] !== object2[key]) { // if not array properties, then compare objects under assumption they're primitive types, unequal returns false
      return false;
    }
  }
  return true; // if everything has been passed, arrays are equal, return true
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) { // If objects are equal (returns true)
    console.log(`👌👌👌 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else { // Objects aren't equal
    console.log(`😡😡😡 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// TEST CODE
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertObjectsEqual(cd, dc);
assertObjectsEqual(cd, cd2);