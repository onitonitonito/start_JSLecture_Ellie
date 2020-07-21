"use strict";
// *************************
// lt02-main.js
// *************************
// http://ecma-international.org/
// https://developer.mozilla.org/ko/docs/Web/API/Console_API
// https://nodejs.org/api/console.html#console_console_log_data_args

// ex02_1();
// ex02_0();

// 0.WARM-UP PRACTICE in Foremer lecture
function ex02_0() {
  let say = 'Hello JS World!';
  console.log(say);
}


// var count = 3;     // smack back! ... hey, var user!
let count = 3;

// prints: count: 5, to stdout
console.log('before count: %d', count);

// prints: count: 6, to stdout
// count += 1
count--
console.log('after count:', count);


// 비상식적인 문법은 개발자 툴에서 에러를 표시한다.
let a;
a = 6;
console.log('a = ', a);
