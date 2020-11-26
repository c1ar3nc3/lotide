/*
const raisinAlarm = function(cookie) {
  let output = "All good!";
  for (let i = 0; i < cookie.length; i++) {
    if (cookie[i] === "🍇") {
      output = "Raisin alert!";
    }
  }
  return output;
};


console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));
*/

const raisinAlarmArray = function(cookie) {
  let output = [];
  for (let i = 0; i < cookie.length; i++) {
      if (cookie[i].includes("🍇")) {
        output.push("Raisin Alert!");
      } else {
        output.push("All good!");
      }
    return output;
  }
};

console.log(raisinAlarmArray(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarmArray(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarmArray(["🍫", "🍫", "🍫"]));