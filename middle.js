const middle = function(array) {
  let middleArray = [];
  if (array.length < 3) { //return middleArray without pushing if array is not long enough
    return middleArray;
  }

  let middleIndex = Math.floor(array.length / 2); //Middle index of 8 is 4 (plus index 3 for both middle values), middle index of 7 is 3.5 -> 3

  if (array.length % 2 === 0) {
    middleArray.push(array[middleIndex - 1], array[middleIndex]); //middleIndex - 1 is the left middle value, middleIndex is the right middle value
  } else {
    middleArray.push(array[middleIndex]); //only one middle for odd length arrays
  }
  return middleArray;
};

module.exports = middle;