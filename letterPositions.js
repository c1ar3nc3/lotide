const letterPositions = function(sentence) {
  const results = {};
    for (let i = 0; i < sentence.length; i++) { 
      if(sentence[i] !== " ") {
        if (results[sentence[i]]) { 
          results [sentence[i]].push(i);
        } else {
          results[sentence[i]] = [i];
        }
      }
    }
  return results;
};

// letterPositions("lighthouse in the house");
// assertArraysEqual(letterPositions("hello").e, [1]);

module.exports = letterPositions;