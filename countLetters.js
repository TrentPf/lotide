// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👌👌👌 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  let letters = {};

  for (let letter of sentence) { // loop through characters of string
    if (letter !== " ") { // Only add a value if it's not a space
      if (letters[letter]) { // if the property already exists, add one
        letters[letter] += 1;
      } else { // if it doesn't exist, set it to 1
        letters[letter] = 1;
      }
    }
  }
  return letters;
};

// TEST CODE
let result = countLetters("lighthouse in the house");
console.log(result);
assertEqual(result["h"], 4);