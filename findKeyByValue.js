// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👌👌👌 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(objectToSearch, value) {
  let arrayKeys = Object.keys(objectToSearch); // Convert keys to an array

  for (let key of arrayKeys) { // Loop through array of keys
    if (objectToSearch[key] === value) { // if property of key value is equal to value to search for
      return key; // return the key where it occurs
    }
  }
};

// TEST CODE
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
