const words = ["Yo Yo", "Lighthouse", "Labs"];

const tail = function(array) {
  return array.slice(1);
};

tail(words);

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};


assertEqual(words.length, 3);