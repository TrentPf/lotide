# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @trentpf/lotide`

**Require it:**

`const _ = require('@trentpf/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: returns the first value of an array, undefined if an empty array
* `tail(array)`: returns all values (array) except the first of an array, undefined if array length is less than or equal to 1
* `middle(array)`: returns the middle values (array) of an array, returns 1 value if odd length, 2 if even length, returns undefined if array length is less than or equal to 2
* `map(array, callback)`: returns a new array created by calling a callback function argument on the array argument
* `letterPositions(sentence)`: returns an object containing properties of array values that hold the index of each non-space character that occurs in the string
* `flatten(array)`: returns array argument "flattened", any values of outer array that are arrays themselves are turned into sequential values in the outer array
* `findKeyByValue(objectToSearch, value)`: returns the string of the property key where the value argument occurs
* `findKey(object, callback)`: returns property key of object argument based on callback function argument
* `countOnly(allItems, itemsToCount)`: returns an object of counted values in an argument array allItems based on object argument listing which items to count
* `countLetters(sentence)`: returns an object containing how many times each letter occurs in argument sentence