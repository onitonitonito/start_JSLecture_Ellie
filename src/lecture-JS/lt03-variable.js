// **** 1.Use strict
// * added in ES5
// * use this for Valina JavaScript
'use strict';


// **** 2.Variable
// * let (added in ES6)

let globalName = 'global name!'

{
  let name = 'Kay';
  console.log(name);

  name = 'Hello';
  console.log(name);
  console.log(globalName);

}

// * console.log(name);    // Error
console.log(globalName);

// **** var (don't ever use this!) == slap back!

// **** var hoisting
// * if, crazy order can be possible!

// name = 4;
// let name;

// * this is called == Var hoisting (move declaration from bottom to top)

console.log(age);
age = 4;
var age;

// **** var has no block scop == ignore block scope
// * var ignore

{
  age = 4;
  var age;
}

console.log(age);


// **** 3. Constant
// * favor immutable data type always for a few reason :
// *  - security = hacker can't change constant by sneak code
// *  - thread safety = multi-thread called constant in same time
// *  - reduce human mistake =

// *** mutable=let / immutable=const

const dayInWeek = 7;
const maxNumber = 5;

const count = 17;         // integer
const size = 12.7;        // decimal number

// **** 4. Variable Types

console.log('value: ${count}, type: ${typeof count}');
