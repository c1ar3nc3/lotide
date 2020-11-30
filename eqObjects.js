const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (let key in object1) {
      if ((Array.isArray(object1[key]) && Array.isArray(object2[key]))) { 
        if (eqArrays(object1[key], object2[key]) === false) {
          return false
        }
      } else {
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
    return true;
  }
};

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// eqObjects(ab, ba);

// const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, abc);

// assertEqual(eqObjects(ab, ba), true);
// assertEqual(eqObjects(ab, abc), false);

module.exports = eqObjects;