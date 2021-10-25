// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👌👌👌 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  return array.slice(1);
};
// TEST CODE
console.log(tail([5,6,7])); //generic test
console.log(tail([])); //empty array test
console.log(tail([5])); //single element array test

//Test Case 1: Check returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); //check to see array length is 2 elements after tail function is called
assertEqual(result[0], "Lighthouse"); //check to see if element 0 is equal
assertEqual(result[1], "Labs"); //check to see if element 1 is equal

//Test Case 2: Check the original array is the same
const words = ["Hi", "Hello"];
tail(words); //call tail function with the array
assertEqual(words.length, 2); // Check to see length is still 2 elements