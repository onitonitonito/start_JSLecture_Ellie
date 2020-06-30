// whol-script strict mode syntax
// javascript is very flexible
// flexible == dangerous

'use strict';

// http://ecma-international.org/
// https://developer.mozilla.org/ko/docs/Web/API/Console_API
// https://nodejs.org/api/console.html#console_console_log_data_args

var count = 3;

// Prints: count: 5, to stdout
console.log('before count: %d', count);

// Prints: count: 6, to stdout
count += 1
console.log('after count:', count);


// 비상식적인 문법은 개발자툴에서 에러를 표시한다.
let a;

a = 6;
console.log('a = ', a);
