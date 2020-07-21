"use strict";
// *************************
// lt13-async-await.js
// *************************

// 0.WARM-UP PRACTICE in Foremer lecture
function ex13_0() {

}

// TODO: 비동기 하일라이트 / 비동기의 꽃! Async(), Await()
// ex12_0();
// ex13_1();
// ex13_2();

// async, await == promise-1, promise-2, promise-3, promise chaining
// 프로미스 체이닝을 게속하게 되면 코드가 난잡해짐
// 동기식으로 코드를 작성하는 것 처럼 도와준다.
// promise 위에 감싸는 것을 ==  syntactic sugar
// class 역시, prototypte 의에 신세틱 슈가

// async & await

// 01. clear style of using promise :)
function ex13_1() {
  function fetchUser() {
    // do network request in 10 sec...  (assuming)
    // return 'Ellie';
    return new Promise((resolve, reject) => {
      // excutor callback

      return 'Ellie';
      // Promise {<pending>}
      // __proto__: Promise
      // [[PromiseStatus]]: "pending"
      // [[PromiseValue]]: undefined

      // resolve('Ellie');
      // // Promise {<resolved>: "Ellie"}
      // //__proto__: Promise
      // //[[PromiseStatus]]: "resolved"
      // //[[PromiseValue]]: "Ellie"
    })
  }

  const user = fetchUser();    // after 10 sec! ... need async!
  console.log(user);
  user.then(console.log)
}

// 02. async <-- promise, autonomously applied to function!
function ex13_2() {
  // syntactic sugar = warpper?
  async function fetchUser() {
    // do network request in 10 sec...
    return 'Ellie';
  }

  const user = fetchUser();    // after 10 sec! ... need async!
  console.log(user);
  user.then(console.log);
}

// 03. await : only can be used in async function
function delay(ms) {
  console.log(`delayed ${ms/1000} seconds ...`);
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1501);
  // throw 'error'             // forced Error!
  return '🍎';
}

// async function getBanana() {
//   await delay(1500);
//   return '🍌';
// }


function getBanana() {
  return delay(1500)     // promise(resolve => setTimeout(resolve, ms));
  .then(() => '🍌');
}


// // 03. another possible form of callback-hell = promise chainning
// function pickFruits() {
//   console.log('picking fruits ....');
//   return getApple()
//   .then(apple => {
//     return getBanana()
//     .then(banana => `${apple} + ${banana}`);
//   });
// }

// asyn function pickFruits() {
//   const apple = await getApple();
//   const banana = await getBanana();
//   return `${apple} + ${banana}`;
// }

// Error Handling : try ... catch ...
async function pickFruits() {
  console.log('picking fruits ....');
  try {
    const applePromise = getApple();     // pararell proceed
    const bananaPromise = getBanana();

    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
  }

  catch {
    console.log('ERROR OCCURS!');
    return '💀 ... died!';
  }
}

pickFruits().then(console.log)


// 04. useful Promise APIs -- all(array), race(array)
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()])
  .then(fruits => fruits.join(' + '))
}

pickAllFruits().then(console.log)


// 05. Pick only what first gotten
function pickOnlyOneFruit() {
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOneFruit().then(console.log)


// TODO: HOMEWORK! .. lecture12. callback to promise --> async, await
