"use strict";

// *************************
// lt11-nesting-callback-hell.js
// *************************

// 0.WARM-UP PRACTICE in Foremer lecture
function ex11_0() {

}

// TODO:
// ex11_2();
ex11_1();


// JavaScript is synchronous.
// Excuse the code block by order after hoisting.
// hoisting : var, function declaration

function ex11_1() {
  let mode = 'async'   // or 'sync' or 'async'

  console.log('1');

  if (mode === 'sync') {
    console.log('2');
  } else {
    setTimeout(() => {
      console.log('2')
      return true;
    }, 500);
  }
  console.log('3');
}


function remain() {
  // synchronous callback

  function printImmediately(print) {
    print();
  }

  printImmediately(() => console.log('hello'));

  // Asyncronous callback
  function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
  }

  printWithDelay(() => console.log('async callback'), 2000);
}
