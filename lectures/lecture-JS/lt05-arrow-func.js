"use strict";

// *************************
// Lecture.05 - arrow func & define function
// *************************
// function
//  - fundamental building block in the program
//  - subprogram can be used multiple times
//   - performs a task or calculates a value1

// 1. Function declaration
// function name (peram1, param2) {body... return}
// one function === one tihing ... SOLID
// naming : doSomething, command, verb
// e.g. createCarAndPoint --> split createCar, CreatePoint
// function is object in JS

function printHello() {
  console.log('Hello!');
}

printHello();


function log(message) {
  console.log(message);
}

log('World!');
log(1234);       // automatically turn into String()

// https://www.typescriptlang.org/
// https://www.typescriptlang.org/play/index.html
// function log(message : string) : number {
//     console.log(message);
//     return 1;
// }
//
// log('Hello!');
// log(123);         // Error!


// 2.Parameters
// premitive parameters : passed by value
// object parameters : passed by reference
function changeName(obj) {
  obj.name = 'Coder';
}

const user = { name : 'Ellie' };
console.log(user);

changeName(user);
console.log(user);

// 3. default parameters (added in ES6)
function showMessage(message, from) {
  if (from == undefined) from = 'Unknown';
  console.log(`${message} by '${from}'`);
}
showMessage('Hi!')

// 4. Rest parameters (added in ES6)
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
}

printAll('dream', 'coder', 'Eliie')


// 5. local scope
// like a tinted window
//   - inside can see outside
//   - outside can't see inside
let globalMessage = 'global';    // global variable
function printMessage() {
  let message = 'Hello!';
  console.log(`local  = ${message}`);           // local variable
  console.log(`global = ${globalMessage}`);     // global variable
  function printAnother() {
    console.log(`child message = ${message}`);
    let childMessage = 'Child Hello!'
    return undefined;
  }
  printAnother();
  return undefined;
}

printMessage();
// console.log(`local  = ${message}`);           // local variable
// Error occire ... can't see loval vari outside!


// 6. return a value
function sum(a, b) {
  return a + b;
}
console.log(`sum = ${sum(1, 2)}`);


// 7. Early return, early exit
// bad ... long logic
function badUpgrageUser(user) {
  if (user.point > 10) {
    // long upgrade logic ...
  }
}

// good ... Early return, early exit.
function goodUpgrageUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic ...
}


// first-class Function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another functions

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.

const print = function () {
  console.log('print');
}

print();
const printAgain = print;     // assigned object
printAgain();

const sumAgain = sum;
console.log(sumAgain(1,3));


// 2. callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}


const printYes = function () {
  console.log('Yes!');
}

const printNo = function () {
  console.log('No!');
}
