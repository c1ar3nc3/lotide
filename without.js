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

const without = function(main, remove) {
  for (let a = 0; a < remove.length; a++) {
    for (let b = 0; b < main.length; b++) {
      if (main[b] === remove[a]) {
        main.splice(b, 1);
      }
    }
  }
  return main;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]);