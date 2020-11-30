const countLetters = function(word) {
  const result = {};
  const fixedWord = word.split(" ").join("");
  for (let letter of fixedWord) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};


module.exports = countLetters;