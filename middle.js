const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log("🛑🛑🛑 Arrays are not equal.");
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if ((Array.isArray(arr1[i]) || Array.isArray(arr2[i])) && eqArrays(arr1[i], arr2[i]) === false) {
      console.log("🛑🛑🛑 Arrays are not equal.");
      return false;
    } else if (Array.isArray(arr1[i]) || Array.isArray(arr2[i])) {
      eqArrays(arr1[i], arr2[i]);
    } else if (arr1[i] !== arr2[i]) {
      console.log("🛑🛑🛑 Arrays are not equal.");
      return false;
    }
  }
  console.log("✅✅✅ Arrays are equal.");
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let x = 0; x < arr1.length; x++) {
      if (arr1[x] !== arr2[x]) {
        console.log("🛑🛑🛑 Arrays are not equal.");
        return false;
      }
    }
  }
  console.log("✅✅✅ Arrays are equal.");
  return true;
};

const middle = function(arr1) {
  // return 0 if there is no middle
  if (arr1.length <= 2) {
    return [];
  } else if (arr1.length % 2 === 0) { // if # is even, find all grouped middle #'s
    return [arr1[(arr1.length) / 2 - 1], arr1[(arr1.length / 2)]];
  } else { // if # is odd, find a single #
    return [Math.floor((arr1.length) / 2) + 1];
  }
};

assertArraysEqual(middle([1, 2, 3, 4, 5]), middle([1, 2, 3, 4, 5]));
eqArrays(middle([1, 2, 3, 4, 5, 6]), middle([1, 2, 3, 4, 5]));