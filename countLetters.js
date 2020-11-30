const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅Assertion Passed: " + actual + " === " + expected);
  } else {
    console.assert(actual === expected,"🛑🛑🛑Assertion Failed: " + actual + " !== " + expected);
  }
};

const countLetters = function(word) {
  const result = {}; // make an object
  const fixedWord = word.split(" ").join(""); // remove spaces in word
  for (let letter of fixedWord) { // loop through word, returning count for each letter
    if (result[letter]) {
      result[letter] += 1; // adds +1 if loop encounters letter
    } else {
      result[letter] = 1; // set letter equal to 1
    }
  }
  return result;
};

console.log(countLetters("I really hope this works"));

module.exports = countLetters;