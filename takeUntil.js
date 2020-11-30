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

//takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], -1)

module.exports = takeUntil;