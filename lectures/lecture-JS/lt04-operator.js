// *************************
// Lecture.04 - operators
// *************************

// 1. string concatination
function ex04_1() {
  console.log('my' + 'Car'); // myCar
  console.log('1' + 2); // 12
  console.log(`1 + 2 = ${1 + 2}`); // string literals
  console.log('This is Ellie\'s book!'); // This is Ellie's book!
}

// 2. Numeric Operators
function ex04_2() {
  console.log(1 + 2); // 3 =        add
  console.log(1 - 2); // -1 =       subtract
  console.log(1 / 3); // 0.333333 = divide
  console.log(3 * 2); // 6 =        multiply
  console.log(3 % 2); // 1 =        remainder
  console.log(3 ** 2); // 9 =        exponentiation
}

// 3. Increment and Decrement Operators
function ex04_3() {
  let counter

  counter = 2;
  console.log(`counter : ${counter}`);
  const preIncrement = ++counter;
  // counter = counter + 1;
  // preIncrement = counter;
  console.log(`counter : ${counter} ... preIncrement : ${preIncrement}`);

  counter = 2;
  console.log(`counter : ${counter}`);
  const postIncrement = counter++;
  // postIncrement = counter;
  // counter = counter + 1;
  console.log(`counter : ${counter} ... postIncrement : ${postIncrement}`);

  counter = 2;
  console.log(`counter : ${counter}`);
  const preDecrement = --counter;
  // counter = counter - 1;
  // preDecrement = counter;
  console.log(`counter : ${counter} ... preDecrement : ${preDecrement}`);

  counter = 2;
  console.log(`counter : ${counter}`);
  const postDecrement = counter--;
  // postDecrement = counter;
  // counter = counter + 1;
  console.log(`counter : ${counter} ... postDecrement : ${postDecrement}`);

}

// 4. Increment and Decrement Operators
function ex04_4() {
  let x = 3;
  let y = 6;

  console.log(`${x} + ${y} = ${x+y}`);
  x += y; // x = x + y;

  console.log(`${x} - ${y} = ${x-y}`);
  x -= y;

  console.log(`${x} * ${y} = ${x*y}`);
  x *= y;

  console.log(`${x} / ${y} = ${x/y}`);
  x /= y;
}

// 5 comperison operators
function ex04_5() {
  console.log(10 < 6); // less than
  console.log(10 <= 6); // less than or equal
  console.log(10 > 6); // greater than
  console.log(10 >= 6); // greater than or equal
}

// 6 logical operators : || or, && and, ! not
function ex04_6() {
  // comment here
  const value1 = true;
  const value2 = 4 > 2;

  // (or), finds the first trutlhy values
  console.log(` 1. or  = ${value1 || value2 || check()}`);

  // (or), finds the first falsy values
  console.log(` 2. and = ${value1 && value2 && check()}`);

  // often used to compress long if-statement
  // nullableObject && nullableObject.something

  // if nullableObject != null) {
  //   nullableObject.something;
  // }


  function check() {
    for (let i = 0; i < 5; i++) {
      // wasting time
      console.log('😱');
    }
    return true;
  }

  // ! (not) ... reverse value
  console.log(!value1);
}

// 7. Equality = loose / strict equality
function ex04_7() {
  const stringFive = '5';
  const numberFive = 5;

  // == ... Loose equality, with type conversion
  console.log(stringFive == numberFive); // true
  console.log(stringFive != numberFive); // false

  // === ... strict equality, no type conversion
  console.log(stringFive === numberFive); // false
  console.log(stringFive !== numberFive); // true

  // object equality by reference ... object refers reference
  const ellie1 = {
    name: 'ellie'
  };
  const ellie2 = {
    name: 'ellie'
  };
  const ellie3 = ellie1;

  console.log(ellie1 == ellie2); // false
  console.log(ellie1 === ellie2); // false
  console.log(ellie1 === ellie3); // true

  // equality - puzzler
  console.log(0 == false); // true
  console.log(0 === false); // false

  console.log('' == false); // true
  console.log('' === false); // false

  console.log(null == undefined); // true
  console.log(null === undefined); // false

  console.log(NaN == undefined); // false
  console.log(NaN === undefined); // false ... comparison to NaN is always false!
}

// 8. Conditional operators : if
//   if, else if, else
function ex04_8() {
  const name = 'Ellie';

  if (name == 'Ellie') {
    console.log('Welcome Ellie!');
  } else if (name == 'Coder') {
    console.log('You are amazing Coder!');
  } else {
    console.log('Unknown');
  }
}

// 9. Terary operator:?
function ex04_9() {
  const name = 'Elliey';
  console.log(name == 'Ellie' ? 'yes' : 'no');
}

// 10. switch statement
// use for multiple if checks
// use for enum-like value checks
// use for multiple type checks in TS
function ex04_10() {
  // const browser = 'IE';
  const browser = 'Firefox';
  // const browser = 'Whale';

  switch (browser) {
    case 'IE':
      console.log('go away!');
      break;

    case 'Chrome':
    case 'Firefox':
      console.log('Love you!');
      break;

    default:
      console.log('Same all!');
      break;
  }

}

// 11.loops == while, do-while, for forEach,
// while loops, while true condition is trutlhy
// body code is executed
function ex04_11() {
  let i = 3;
  while (i > 0) {
    console.log(`while : ${i}`);
    i--;
  }

  // do while loop, body code is executed first,
  // then check the condition.
  i = 3;
  do {
    console.log(`do while : ${i}`);
    i--;
  } while (i > 0);

  // for loop. for(begin; condition; step)
  for (let i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
  }

  // inline variable declaration
  for (let i = 3; i > 0; i = i - 1) {
    console.log(`inline variable for : ${i}`);
  }

  // nested loops : double for loops
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 3; j++) {
      console.log(`i*j= ${i*j} ... i=${i}, j=${j} `);
    }
  }

  // break, continue

  // 01.iterate from 1 to 10 and print only even numbers (use continue)
  for (let i = 0; i < 11; i++) {
    if (i % 2 !== 0) {
      continue;
    }
    console.log(`q1. ${i}`);
  }

  // 02. iterate from 0 to 10 and print numbers until reaching 8 (use break)
  for (let i = 0; i < 11; i++) {
    if (i > 8) {
      break;
    }
    console.log(`q2. ${i}`);
  }

  // forEach == like python.enumerate, return i, item of arrat.
  // JS : foreach 문 , for in 문 , for of문 :: https://bit.ly/2Obzkf9
  var arr = ['A', 'B', 'C', ]
  arr.forEach((item, i) => {
    console.log(`${i}. ${item} `);
  });

}


ex04_11();
// ex04_10();
// ex04_9();
// ex04_8();
// ex04_7();
// ex04_6();
// ex04_5();
// ex04_4();
// ex04_3();
// ex04_2();
// ex04_1();
