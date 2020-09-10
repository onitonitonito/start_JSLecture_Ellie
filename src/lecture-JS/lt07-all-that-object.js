"use strict";

// *************************
// Lecture.07 - all-that-object.js
// *************************

// object
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JS are instances of Object

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
// dynsmic typing script -- runtime

// object = {key : value};
// 1. Literal & properties

const obj1 = {};           // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax = call constructor

const name = 'Kay';
const age = 4;

function printLong(name, age) {
  console.log(name);
  console.log(age);
}

printLong(name, age);


function printShort(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = {name: 'Ellie', age: 15}
// console.log(ellie);
printShort(ellie);

// with JS magic(?) ... (dynamic typed language)
// can add properties later
ellie.hasJob = true;
console.log(ellie.hasJob);     // true

delete ellie.hasJob;
console.log(ellie.hasJob);     // undefined

// 2. Computed properties
// key should be always string

console.log(ellie.name);      // call exact value
console.log(ellie['name']);   // Computed prop(runtime) = don't know exact

ellie['hasJob'] = true;
console.log(ellie.hasJob);

// Example for Runtime-assignment = dynamic typing
function printValue(obj, key) {
  // console.log(obj.key);    // undefined
  console.log(obj[key]);      // 'Ellie'
}

printValue(ellie, 'name');    // undefined
printValue(ellie, 'age');    // undefined

// 3. Property value shorthand
const person1 = {name: 'Alice', age: 2};
const person2 = {name: 'Bob', age: 3};
const person3 = {name: 'Charlie', age: 4};

const person4 = makePerson('Daren', 30);

console.log(person4);

function makePerson(name, age) {
  return {
    // name: name,
    // age: age,
    name,
    age,
  };
}

// 4. Constructor Function
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  //return this;
}


// 5. in operator: property existance check (key in obj)
console.log('name' in ellie);
console.log('age' in ellie);
console.log('ramdom' in ellie);   // false
console.log(ellie.random);        // undefined


// 6. (for..in) vs. (for..of)

// for (key in obj)

for (let key in ellie) {
  console.log(key);
}

// for (value of iterable)

const array = [1, 2, 3, 4];

for (let value of array) {
  console.log(value);
}

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// 7. Fun clonning
// Object.assign(dest, [obj1, obj2, obj3...])

const user1 = { name: 'user1', age : '20'};
const user2 = user1;
console.log('user1 =', user1);

user2.name = 'Nobody';
console.log('..after =', user1);

// old alway
const user3 = {};
for (let key in user1) {
  user3[key] = user1[key];
}

console.log('user3 =', user3);


// object assign
const user4 = {};
Object.assign(user4, user1);
console.log('user4 =', user4)

const user5 = Object.assign({}, user1);
console.log('user5 =', user5)

// another Example of object.assign() can assign array boolean
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);

console.log(mixed.color); // blue ... last value, (value override)
console.log(mixed.size);  // big  ... only value
