// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👌👌👌 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);

  if (object1Keys.length !== object2Keys.length) {
    return false;
  }

  for (let key of object1Keys) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

// TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true
assertEqual(ab.b, ba.b); // => true/assertion passed


const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false
assertEqual(ab.c, abc.c); // => false/assertion failed