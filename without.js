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

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]);
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

// without([1, 2, 3], [1]); // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]);

module.exports = without;