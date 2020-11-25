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

assertArraysEqual([1, 2, 3], [1, 2, 3]);