const eqArrays = function(arr1, arr2) {
  for(let x = 0; x < arr1.length; x++) {
    if(arr1[x] !== arr2[x])
    return false;
  }
  return true;
}

module.exports = eqArrays;