const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅Assertion Passed: " + actual + " === " + expected);
  } else {
    console.assert(actual === expected,"🛑🛑🛑Assertion Failed: " + actual + " !== " + expected);
  }
};

const findKeyByValue = function(item, value) {  // make function with 2 parameters
  for (const key in item) { // for of loop
    if (item[key] === value) { // check if key matches value, return value if true
      return key;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);