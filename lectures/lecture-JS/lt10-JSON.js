"use strict";

// *************************
// lt10-JSON.js
// *************************

// 0.WARM-UP PRACTICE in Foremer lecture
function ex10_0() {

}

// TODO:

//JSON
//JavaScript Object Notation

// 1. Object to JSON
// stringfy (OBJ)

let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['🍎', '🍌']);

console.log(json);
const rabbit = {
  name : 'Tori',
  color: 'white',
  size : null,
  birthDate : new Date(),
  
  // symbol: Symbol("id"),
  jump : () => {
    console.log(`This '${name}' can jump!`);
  },
}

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color', 'size',]);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  // return value;
  return key == 'name' ? 'Ellie': value;
});
console.log(json);

rabbit.jump();

// 2. JSON to Object
// parse(json)

console.clear();
json = JSON.stringify(rabbit);

const obj = JSON.parse(json);
console.log(obj);

rabbit.jump();

// obj.jump();
