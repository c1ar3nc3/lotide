// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅Assertion Passed: " + actual + " === " + expected);
  } else {
    console.assert(actual === expected,"🛑🛑🛑Assertion Failed: " + actual + " !== " + expected);
  }
};

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("equal", "equal");
// assertEqual(3, 4);

module.exports = assertEqual;