"use strict";

// *************************
// Lecture.08 - lt08-array-APIs.js
// *************************

ex08_ex();
// ex08_5();
// ex08_4();
// ex08_123();

// 0.stretching(warm up) before workout -- in the former lecture
function ex08_0() {
  let array = [1,2,3,4];

  // contents = of
  for (let item of array) {
    console.log(item);
  }

  // index = in
  for (let index in array) {
    console.log(index);
  }
}

// Array - BASIC 1,2,3 = Declaration, Index, for-looping
function ex08_123() {
  // 1. Declaration
  const arr1 = new Array();
  const arr2 = [1, 2];

  // 2. Index Position
  let fruits = ['🍎', '🍌'];
  console.log('fruits =', fruits);
  console.log('length =', fruits.length);  // 2

  console.log('fruits[0] =', fruits[0]);
  console.log('fruits[1] =', fruits[1]);
  console.log('fruits[2] =', fruits[2]);   // undefined

  console.log('fruits[-1] =', fruits[-1]); // undefined
  console.log('fruits[len-1] =', fruits[fruits.length-1]);

  // 3. looping ove an array ... print all fruits

  // a. for
  for (let i=0; i<fruits.length; i++) {
    console.log(fruits[i]);
  }

  // b. for of == items
  for (let item of fruits) {
    console.log(item);
  }

  // c. for in == index
  for (let index in fruits) {
    console.log(fruits[index]);
  }

  // d. forEach((item, i) => {}); ... like enumerate in Python.
  fruits.forEach((item, i) => console.log(`${i}. ${item}`));
}

// 4. Addition, deletion, copy
function ex08_4() {
  let fruits = ['🍎', '🍌', '🍋',];
  console.log('fruits =',fruits);

  // push: add an item to the End
  // pop: delete from the end

  fruits.pop();
  console.log('pop() =',fruits);

  fruits.push('🍊', '🍓');
  console.log(`push(2) =`, fruits);

  // shift & unshift .. in front of array
  // note!! front= [shift, unshift] are much slower than rear=[pop, push]

  fruits.shift();
  console.log('shift() =',fruits);

  fruits.unshift('🍉', '🍋',);
  console.log('unshift(2) =',fruits);


  // splie = delete + add combination
  // unshift(2) = [ '🍉', '🍋', '🍌', '🍊', '🍓' ]

  // fruits.splice(1);                     // splice 1~.. End
  fruits.splice(3, 1);                     // splice(index, count);
  console.log('splice(3, 1) =',fruits);

  fruits.splice(1, 1, '🍇', '🍍');   // splice(index, del_count, add1, add2 ...)
  console.log('splice(1,1,add1, add2) =',fruits);

  // concat = combination of two array
  // combine two arrays == concat
  const fruits2 = ['🍐','🍈', '🍑',];
  const newFruits = fruits.concat(fruits2);    // fruits +(concat) fruits2

  console.log('concat fruits =', newFruits);

}


// 5.searching
function ex08_5() {
  // find the index = indexof, includes
  console.clear();                       // not support in ATOM, only CHROME

  let fruits = [ '🍉',  '🍓', '🍇', '🍍', '🍌', '🍓' ];
  console.log('fruits =', fruits);
  console.log('index 🍌 = ', fruits.indexOf('🍌'));
  console.log('index 🍓 = ', fruits.indexOf('🍓'));
  console.log('index 🍑 = ', fruits.indexOf('🍑'));

  console.log('includes 🍑 = ', fruits.includes('🍑'));


  // indexof = first item, lastIndexof = last item
  console.log('lastIndex 🍓 = ', fruits.lastIndexOf('🍓'));
}


// extra. pop() return poped item
function ex08_ex() {
  let fruits = [ '🍉',  '🍓', '🍇', '🍍', '🍌', '🍓' ];
  console.log('fruits = ', fruits);

  let poped = new Array();
  poped.push(fruits.pop())
  poped.push(fruits.pop())
  poped.push(fruits.pop())

  console.log(`poped(${poped.length}) = [${poped}]`);
  console.log('remains = ', fruits);
}


// TODO: HOME-WORK = research on Array APIs ... toString(),....
