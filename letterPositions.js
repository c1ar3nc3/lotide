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

const letterPositions = function(sentence) {
  const results = {}; //create empty object
    for (let i = 0; i < sentence.length; i++) { // loop through string
      if(sentence[i] !== " ") { // will skip if a space
        if (results[sentence[i]]) { 
          results [sentence[i]].push(i); // adds array position to a new letter
        } else {
          results[sentence[i]] = [i]; // adds position to existing letter
        }
      }
    }
    console.log(results);
  return results;
};

letterPositions("lighthouse in the house");
assertArraysEqual(letterPositions("hello").e, [1]);