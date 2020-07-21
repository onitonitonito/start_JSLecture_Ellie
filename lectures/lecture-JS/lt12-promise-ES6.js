"use strict";

// *************************
// lt12-promise-ES6.js
// *************************

// 0.WARM-UP PRACTICE in Foremer lecture
function ex12_0() {

}

// TODO:
// ex12_2();
// ex12_1();

// primise is a JS object for asynchronous operation.
// (1) State == oper
// state == 오퍼레이터가 실행중인지, 완료됬는지를 확인한다.
// producer == 차이점 이해 정보를 제공하는
// consumer == 정보를 소비하는 소비자
// state : pending --> fulfilled or reject state
// producer vs consumer

// 01.producer
// when. new Promise is created, the excutor runs automatically

const promise = new Promise(function (resolve, reject) => {
  // doing some heavy work() ... asynchronous = ineffective
  console.log('doing something....');
  setTimeout(() => {
    resolve('Ellie');
    // reject(new Error('*** No Network! ***'));
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

// 03. Primise chaining
const fetchNumber = new new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 2000);
});

fetchNumber
  .then(num => num * 2)
  .then(num => num * 3)
  .then(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num-1), 1000);
    })
  })
  .then(num => console.log(num));


// 04. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    // after 1 sec, return Hen
    setTimeout(() => resolve(`🐔`), 1000);
  });

const getEgg = hen =>
  new Promise((resolve, reject) => {
    // after 1 sec, return string 'Hen hatched egg'
    // setTimeout(() => resolve(`${hen} => 🐣`), 1000);
    setTimeout(() => reject(new Error(`Error! while ${hen} => 🐣`), 1000);
  });

const cook = egg =>
  new Promise((resolve, reject) => {
    // after 1 sec, cook fried egg.
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  })


getHen()
  .then(hen => getEgg(hen))
  .then(egg => cook(egg))
  .then(meal => console.log(meal));

// hen => egg => fried egg ... console.log

getHen() //
  .then(getEgg)
  .catch(error => {         // Error Handling ... ingredient chenge, cook OK!
    return '🍞';
  })
  .then(cook)
  .then(console.log())
  .catch(console.log());    // Error Handling ... Cook couldn't complete
