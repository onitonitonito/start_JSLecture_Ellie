// Lecture.04 - operators

function ex04_1() {
  // 1.string concatination
  console.log('my' + 'Car' );             // myCar
  console.log('1' + 2);                   // 12
  console.log(`1 + 2 = ${1 + 2}`);        // string literals
  console.log('This is Ellie\'s book!');  // This is Ellie's book!
}


function ex04_2() {
  // 2. Numeric Operators
  console.log(1 + 2);        // 3 =        add
  console.log(1 - 2);        // -1 =       subtract
  console.log(1 / 3);        // 0.333333 = divide
  console.log(3 * 2);        // 6 =        multiply
  console.log(3 % 2);        // 1 =        remainder
  console.log(3 ** 2);       // 9 =        exponentiation
}

function ex04_3() {
  ```// 3. Increment and Decrement Operators```
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


function ex04_4() {
  ```4. Increment and Decrement Operators```
  let x = 3;
  let y = 6;

  console.log(`${x} + ${y} = ${x+y}`);
  x += y;       // x = x + y;

  console.log(`${x} - ${y} = ${x-y}`);
  x -= y;

  console.log(`${x} * ${y} = ${x*y}`);
  x *= y;

  console.log(`${x} / ${y} = ${x/y}`);
  x /= y;
}

function ex04_5() {
```comperison operators```
  console.log(10 < 6);       // less than
  console.log(10 <= 6);      // less than or equal
  console.log(10 > 6);       // greater than
  console.log(10 >= 6);      // greater than or equal
}


function ex04_6() {
// logical operators : || or, && and, ! not
  function check() {
    for (let i = 0; i < 5; i++){
      // wasting time
      console.log('😱');
    }
    return true;
  }
  check()
}


function ex04_7() {
  // comment here
}

function ex04_() {
  // comment here
}


function ex04_() {
  // comment here
}

// ex04_1()
// ex04_2()
// ex04_3()
// ex04_4()
// ex04_5()
ex04_6()
// ex04_7()
