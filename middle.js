const middle = function(arr1) {
  if (arr1.length <= 2) {
    return [];
  } else if (arr1.length % 2 === 0) {
    return [arr1[Math.ceil(arr1.length) / 2 - 1], arr1[Math.ceil(arr1.length / 2)]];
  } else {
    return [arr1[Math.floor(arr1.length / 2)]];
  }
};

module.exports = middle;