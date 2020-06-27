'use strict';

// http://ecma-international.org/
// https://developer.mozilla.org/ko/docs/Web/API/Console_API
// https://nodejs.org/api/console.html#console_console_log_data_args

var count = 3;

// Prints: count: 5, to stdout
console.log('before count: %d', count);

count += 1
console.log('after count:', count);
// Prints: count: 6, to stdout

console.log('Hello! .... World!');

const hello = 'Hello World!';
console.log(hello);

// 비상식적인 문법은 개발자툴에서 에러를 표시한다.
let a;

a = 6;
console.log('a = ', a);
