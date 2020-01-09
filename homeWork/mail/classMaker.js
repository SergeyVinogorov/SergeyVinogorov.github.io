"use strict";
let test = {
  dep: "Adler airport",
  dest: "Roza Khutor",
  seat: "no",
  transType: "train Lastochka",
  depPoint: "folow the signs",
  transNumb: "no",
  baggage: "no"
};
// let example = {
//   // first: "",
//   // second: "",
//   // third: ""
// };
let text = [];
// function findPassKey(find, numInText) {
//   for (let key in test) {
//     if (key === find) {
//       return (example[numInText] = test[key]);
//     }
//   }
// }
// test.seat = "No seat assignment" || "";
let beforeAir = "from ";
let beforeTransport = "take ";
let beforeDest = "to ";
let result = "";
function makeDefaultValues(findKey, value) {
  for (let key in test) {
    if (key === findKey) {
      if (test[key] === false || "no") {
        test[key] = value;
      }
    }
  }
}
function findKey(find, insertedVar) {
  for (let key in test) {
    if (key === find) {
      insertedVar += test[key];
      return (test[key] = insertedVar);
    }
  }
}
function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}
function makeQueue(find) {
  for (let key in test) {
    if (key === find) {
      text.push(test[key]);
    }
  }
}
// let numberOfPropertiesTest = Object.keys(test).length;
// function makeListOfText() {
//   for (let i = 1; i <= numberOfPropertiesTest; i++) {
//     example[i] = "";
//   }
// }
// function fillObj() {
//   let counter = 1;
//   for (let key in test) {
//     example[counter] = test[key];
//     counter++;
//   }
// }
// function makeText() {
//   for (let key in example) {
//     text.push(example[key]);
//   }
//   let result = `Take ${example[1]} ${example[2]}${example[3]}${example[4]}${example[5]}${example[6]}${example[7]}`;
//   return result;
// }
function checkNoValues() {
  for (let key in test) {
    if (test[key] === false || test[key] === "no") {
      test[key] = "";
    }
  }
}
function makeResult() {
  text.forEach(function(element, index) {
    if (index == 0) {
      result += `${element}`;
    } else {
      result += ` ${element}`;
    }
  });
}
function filterText() {
  text = text.filter(item => item);
}
// function makeTextToString() {
//   if (test.transType === "flight") {
// 		result =
// 		return true;

//   }
//   return false;
// }
makeDefaultValues("seat", "No seat assignment");
findKey("dep", beforeAir);
findKey("dest", beforeDest);
findKey("transType", beforeTransport);
checkNoValues();
makeQueue("transType");
makeQueue("depPoint");
makeQueue("dep");
makeQueue("transNumb");
makeQueue("dest");
makeQueue("seat");
makeQueue("baggage");
filterText();
makeResult();
result = ucFirst(result);
// makeListOfText();
// // findKey("dep", beforeAir);
// fillObj();
// makeText();
console.log(result);
