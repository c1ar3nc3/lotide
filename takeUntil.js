const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

const takeUntil = function(array, callback) {
  let results = [];
  for (let item of array) {
    if (item !== callback) {
      results.push(item);
    } else {
      return results;
    }
  }
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

const eqArrays = function(arr1, arr2) {
  for(let x = 0; x < arr1.length; x++) {
    if(arr1[x] !== arr2[x])
    return false;
  }
  return true;
}

assertArraysEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], -1), [1, 2, 5, 7, 2])