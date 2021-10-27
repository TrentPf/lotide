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

  for (let letter of sentence) {
    if (letter !== " ") {
      if (letters[letter]) {
        letters[letter] += 1;
      } else {
        letters[letter] = 1;
      }
    }
  }
  return letters;
};

let result = countLetters("lighthouse in the house");
console.log(result);
assertEqual(result["h"], 4);