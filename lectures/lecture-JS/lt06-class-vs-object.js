"use strict";

// *************************
// Lecture.06 - class vs. object.js
// *************************

// class person {
//     name;        ... fields
//     age;
//     speak();     ... methods
//     }

// data class = fields only
// incapsulation = black box

// '''
// class == frame / not on the memory
//   - template
//   - declare once
//   - no data in
//   )
//
// object == fish bread / on the memory
//   - instance of a class
//   - created many times
//   - data in == red bean, pizza, cream fish bread
//  '''

// Object-Oriented programming
// class : template, blue-print
// object : instance of a class

// JavaScript classes (introduced in ES6)
//   - syntactical sugar over 'prototype'-based inheritance

// 1. Class declaration
function ex06_1() {
  class Person {
    // constructor
    constructor(name, age, gender) {
      // fields
      this.name = name;
      this.age = age;
      this.gender = gender;
    }

      // methods
    speak(more='') {
      console.log(`${this.name} : Hello!`, `${more}`);
    }

    introduce(more='') {
      console.log(
                  `${this.name} : My name is '${this.name}',`,
                  `and I'm a ${this.age}-year-old ${this.gender}.`,
                  `${more}`
                );
    }
  }

  const ellie = new Person('Ellie', 29, 'girl');
  const kay = new Person('Kay', 17 , 'boy');

  ellie.speak('Everyone~ Good to see you guys!');
  ellie.introduce('\n');

  kay.speak('Guys..');
  kay.introduce();
}


// 2. getter & setter
function ex06_2() {
  class User {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;

      // this.age ... call getter
      // = age    ... call setter
      this.age = age;
    }

    get age() {
      // return different name age --> _age
      return this._age;
    }

    set age(value) {
      // When value --> this.age assign
      // [NOT]  Load on the memory, But
      // [CALL] Setter() ... infinite repeatation! [ERROR]
      //      : RangeError: Maximum call stack size exceeded
      // [PREVENT] age --> _age, different name set

      // if (value < 0) {
      //   throw Error('age can not be negative..');  // Error occured!
      // }  // throw aggresive warning!

      this._age = value < 0 ? 0 : value;

    }
  }

  const user1 = new User('Steve', 'Jobs', -1);
  console.log(user1.age);      // setter() turn negative into 0!
}

// 3. Fields (Public, Private)
function ex06_3() {
  // Too soon! ... update : unsupport inundated browser even Safari-
  // If you want to use, USE IT via BABEL.
  // https://developer.mozilla.org/en-su/docs/web/JavaScript/Refere

  class Experiment {
    publicField = 2;
    #privateField = 0;
  }

  const experiment = new Experiment();
  console.log(experiment.publicField);
  console.log(experiment.privateField);
  // Atom-JavaScript-RUN not support, yet! ... Syntax Error occured
  // Check result on Chrome browser, via main.html
}

// 4. static
