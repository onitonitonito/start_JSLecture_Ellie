"use strict";

// *************************
// lt12-promise-ES6.js
// *************************

// 0.WARM-UP PRACTICE in Foremer lecture
function ex12_0() {

}

// TODO:
// ex12_3();
ex12_2();
// ex12_1();

// primise is a JS object for asynchronous operation.
// (1) State == oper
// state == 오퍼레이터가 실행중인지, 완료됬는지를 확인한다.
// producer == 차이점 이해 정보를 제공하는
// consumer == 정보를 소비하는 소비자
// state : pending --> fulfilled or reject state
// producer vs consumer

// 01.producer : resolve, reject -->  02. consumer: then, catch, finally
// CAUSION!: when. new Promise is created, Excutor runs automatically!
function ex12_1() {
  const promise = new Promise((resolve, reject) => {
    // doing some heavy work() ... asynchronous = ineffective
    console.log('doing something.... HEAVY~!');
    setTimeout(() => {
      resolve('Ellie');
      reject(new Error('*** No Network! ***'));
    }, 2000);
  });


  // 02. consumer: then, catch, finally
  promise
  // resolve value
  .then((value) => {
    console.log(value);
  })
  // resolve value
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log('finally');
  });
}


// 03. Promise chaining ... serialize
function ex12_2() {
  const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 2000);
  });

  fetchNumber           // promise
  .then(num => num * 2)       // 1 => 1*2 = 2
  .then(num => num * 3)       // 2 => 2*3 = 6
  .then(num => {              // 6 => 6-1 = 5!
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num-1), 1000);
    })
  })
  .then(num => console.log('chaining result =', num));
}


// 04. Error Handling ... SET Promise
function ex12_3() {
  const getHen = () =>
    new Promise((resolve, reject) => {
      // after 1 sec, return Hen
      setTimeout(() => resolve(`🐔`), 1000);
    });

  const getEgg = hen =>
    new Promise((resolve, reject) => {
      // after 1 sec, return string 'Hen hatched egg'
      setTimeout(() => {
        // resolve(`${hen} => 🐣`);
        reject(new Error(`While ${hen} => 🐣`));
      }, 1000);
    });

  const cook = egg =>
    new Promise((resolve, reject) => {
      // after 1 sec, cook fried egg.
      setTimeout(() => resolve(`${egg} => 🍳`), 1000);
    })


  // 01. If there's no Error!
  // hen => egg => fried egg ... console.log
  getHen()
  .then(hen => getEgg(hen))
  .then(egg => cook(egg))
  .then(meal => console.log(meal));


  //  02. If there's an Error! while Hen => egg
  getHen() //
  .then(getEgg)
  .catch(error => `${error}, change: 👩 => 🍞`) // Error Handling : cook O.K!
  .then(cook)
  .then(console.log)
  .catch(console.log);                   // Error Handling : cook N.G!
}
