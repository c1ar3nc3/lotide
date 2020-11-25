const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅Assertion Passed: " + actual + " === " + expected);
  } else {
    console.assert(actual === expected,"🛑🛑🛑Assertion Failed: " + actual + " !== " + expected);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if ((Array.isArray(arr1[i]) || Array.isArray(arr2[i])) && eqArrays(arr1[i], arr2[i]) === false) {
      return false;
    } else if (Array.isArray(arr1[i]) || Array.isArray(arr2[i])) {
      eqArrays(arr1[i], arr2[i]);
    } else if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);