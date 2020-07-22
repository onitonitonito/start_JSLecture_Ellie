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

// https://www.typescriptlang.org/
// https://www.typescriptlang.org/play/index.html
// function log(message : string) : number {
//     console.log(message);
//     return 1;
// }
//
// log('Hello!');
// log(123);         // Error!

// 1. define function and call
function ex05_1() {
  function printHello() {
    console.log('Hello!');
  }

  printHello();


  function log(message) {
    console.log(message);
  }

  log('World!');
  log(1234);       // automatically turn into String()

}

// 2.Parameters
function ex05_2() {
  // premitive parameters : passed by value
  // object parameters : passed by reference
  function changeName(obj) {
    obj.name = 'Coder';
  }

  const user = { name : 'Ellie' };
  console.log(user);

  changeName(user);
  console.log(user);
}

// 3. default parameters (added in ES6)
function ex05_3() {
  function showMessage(message, from) {
    if (from == undefined) from = 'Unknown';
    console.log(`${message} by '${from}'`);
  }
  showMessage('Hi!')
}

// 4. Rest parameters (added in ES6)
function ex05_4() {
  function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
      console.log(args[i]);
    }
  }

  printAll('dream', 'coder', 'Eliie')
}

// 5. local scope
function ex05_5() {
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
}

// 6. return a value
function ex05_6(a, b) {
  function sum(a, b) {
    return a + b;
  }
  console.log(`sum = ${sum(1, 2)}`);

  if (a && b) {
    return sum(a, b);
  } else {
    return undefined;
  }
}

// 7. Early return, early exit
function ex05_7() {
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
}

// first-class Function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another functions

// 8. Function expression
function ex05_8() {

  // a function declaration can be called earlier than it is defined. (hoisted)
  // a function expression is created when the execution reaches it.
  const print = function () {
    console.log('print');
  }
  print();                      // print
  const printAgain = print;     // assigned object
  printAgain();                 // print

  const sumAgain = ex05_6;      // return sum(a, b); ... assign = log(sum = 3)
  console.log(`sumAgain = ${sumAgain(1, 3)}`);

  // 2. callback function using function expression
  function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you!') {
      printYes(answer);
    } else {
      printNo(answer);
    }
  }

  // anonymous function
  const printYes = function (answer) {
    console.log(`${answer} = 'SAY Yes!'`);
  }

  // named function
  // better debugging in debugger's stack traces
  // recursions
  const printNo = function print(answer) {
    console.log(`${answer} = 'SAY No!'`);
    // print();                    // recursive use == infinit repeatation!, Error
  }

  randomQuiz('wrong    ', printYes, printNo);
  randomQuiz('love you!', printYes, printNo);

  // Arrow functions == always anonymous

  // const simplePrint = function () {
  //   console.log('normal function');
  // }

  const simplePrint = () => console.log('simplePrint!');
  const add = (a, b) => a + b;
  const simpleMultiply = (a, b) => {
    // do something more
    return a * b;
  }

  simplePrint();
  console.log(add(1,2));
  console.log(simpleMultiply(3,4));

  // IIFE = Tmediately Invoked Function expression
  (function hello() {
      console.log('IIFE!');
    })();
}

// 9. Fun quiz time❤️
const calculate = (commend, a, b) => {
  // function calculate(command, a, b)
  // commend: (add, substract, multiply, remainder )
  switch (commend) {
    case 'add':
      console.log(`add      : ${a} + ${b} = ${a + b}`);
      break;

    case 'substract':
      console.log(`substract: ${a} - ${b} = ${a - b}`);
      break;

    case 'multiply':
      console.log(`multiply : ${a} x ${b} = ${a * b}`);
      break;

    case 'remainder':
      console.log(`remainder: ${a} / ${b} = ${a / b}`);
      break;

    default:
      console.log('Default Exit == commited!');
  }
}

calculate('add', 3, 4);
calculate('substract', 3, 4);
calculate('multiply', 3, 4);
calculate('remainder', 3, 4);


// ex05_8();
// ex05_7();
// ex05_6();
// ex05_5();
// ex05_4();
// ex05_3();
// ex05_2();
// ex05_1();
