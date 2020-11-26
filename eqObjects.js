const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅Assertion Passed: " + actual + " === " + expected);
  } else {
    console.assert(actual === expected,"🛑🛑🛑Assertion Failed: " + actual + " !== " + expected);
  }
};

const eqArrays = function(arr1, arr2) {
  for(let x = 0; x < arr1.length; x++) {
    if(arr1[x] !== arr2[x])
    return false;
  }
  return true;
}

const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false; // if object length is not equal /end
  } else {
    for (let key in object1) { // for of loop to isolate object1 items
      if ((Array.isArray(object1[key]) && Array.isArray(object2[key]))) { 
        if (eqArrays(object1[key], object2[key]) === false) {
          return false // check if arrays are equal using eqArrays
        }
      } else {
        if (object1[key] !== object2[key]) {
          return false; //if array is a match, will fail if keys do not
        }
      }
    }
    return true;
  }
}

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba);

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc);

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);