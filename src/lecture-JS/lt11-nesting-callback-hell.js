"use strict";

// *************************
// lt11-nesting-callback-hell.js
// *************************

// 0.WARM-UP PRACTICE in Foremer lecture
function ex11_0warmUp() {

}

// TODO:
ex11_4callback_to_promise();
ex11_3callback_hell();
ex11_2();
ex11_1();

// pre-description : JavaScript is synchronous.
// Excuse the code block by order after hoisting.
// hoisting : var, function declaration

// 01. Asyncronous drill
function ex11_1() {
  let mode = 'async' // or 'sync' or 'async'

  console.log('1');
  mode == 'async' ? setTimeout(() => console.log('2'), 1000) : console.log('2');
  console.log('3');
}

// 02. callback Asyncronous drill
function ex11_2() {
  // function, var hoisting!
  function printImmediately(print) {
    print();
  }

  function printWithDelay(print, timeDelay) {
    setTimeout(print, timeDelay);
  }

  // () => console.log('hello, callback!')
  // ... callback / lambda func

  // synchronous callback
  printImmediately(() => console.log('hello, callback!'));

  // Asyncronous callback
  printWithDelay(() => console.log('hello, async callback'), 2000);
}

// 03.nesting a callback-hell for example...
function ex11_3callback_hell() {
  class UserStorage {
    loginUser(id, password, onSuccess, onError) {
      setTimeout(() => {
        if (
          (id === 'Ellie' && password === 'dream') ||
          (id === 'Coder' && password === 'academy')
        ) {
          onSuccess(id);
        } else {
          onError(new Error('** USER not found! **'));
        }
      }, 1000);
    }

    // commit this assumming as BackEnd of bad structure.
    getRoles(id, onSuccess, onError) {
      setTimeout(() => {
        if (id === 'Ellie') {
          let user = {name: 'Ellie',role: 'admin'};
          onSuccess(user);
        } else {
          onError(new Error('no access'));
        }
      }, 1000);
    }
  }

  // prompt() ... is only available on BROWSER!
  const id = prompt('> Enter your ID:');
  const password = prompt('> Enter Your Password:');

  const userStorage = new UserStorage();

  userStorage.loginUser(
      id,
      password,

      // onSuccess
      user => {
        userStorage.getRoles(
          user,

          // onSucess
          userWithRole => {
            alert(`Hello '${user.name}', you have a '${user.role}' role`);
          },

          // onError
          error => {
            console.log(error);
          }
        );
      },

      // onError
      error => {
        console.log(error);
      }
    );
}

// 04.to refactor for callback-hell by promise
function ex11_4callback_to_promise() {
  class UserStorage {
    loginUser(id, password) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (
            (id === 'Ellie' && password === 'dream') ||
            (id === 'Coder' && password === 'academy')
          ) {
            // onSuccess(id);
            resolve(id);

          } else {
            reject(new Error('** USER not found! **'));
          }
        }, 2000);
      });
    }

    // commit this assumming as BackEnd of bad structure.
    getRoles(id) {
      return new Promise((resolve, reject) = {
        setTimeout(() => {
          if (id === 'Ellie') {
            let user = {name: 'Ellie',role: 'admin'};
            resolve(user);
          } else {
            reject(new Error('no access'));
          }
        }, 1000);
      })
    }
  }

  // userStorage.loginUser(id, password) //
  //   .then(user => userStorage.getRoles(user))
  //   .then(user => alert(`Hello '${user.name}', you have a '${user.role}' role`))
  //   .catch(error => console.log(error);)


  // Simplify a little bit!
  userStorage.loginUser(id, password) //
    .then(userStorage.getRoles())
    .then(alert(`Hello '${user.name}', you have a '${user.role}' role`))
    .catch(console.log(error));

}
