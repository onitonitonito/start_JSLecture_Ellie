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
  // Atom-JavaScript-RUN not support, yet! ... Syntax Error occured
  // Check result on Chrome browser, via main.html

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference

  class Experiment {
    publicField = 'public field! == VISIBLE OUTSIDE';
    #privateField = "private field == CAN'T BE SEEN OUTSIDE";
  }

  const experiment = new Experiment();
  console.log(experiment.publicField);
  console.log(experiment.privateField); // undefined ... CAN'T SEE OUTSIDE!
}

// 4. static properties & methods
function ex06_4() {
  // Too soon! ... Not Support yet
  // Atom-JavaScript-Run Don't Support yet! .... check result on Chrome.
  // Check result on Chrome browser, via main.html
  class Article {
    static publisher = 'Dream Coading!';

    constructor(articleNumber) {
      this.articleNumber = articleNumber;
    }

    static printPublisher() {
      console.log(Article.publisher);
    }
  }

  const article1 = new Article(1);
  const article2 = new Article(2);

  // console.log(article1.publisher); // undefined ... static! == Class property
  console.log(Article.publisher); // undefined ... static! == Class property
  Article.printPublisher();
}

// 5.inheritance
function ex06_5() {
  // a way for one class to extend another class.
  class Shape {
    constructor(width, height, color, name) {
      this.width = width;
      this.height = height;
      this.color = color;
      this.name = name;
    }

    drawShape() {
      console.log(`drawing ${this.color} color!`);
    }

    getArea() {
      return this.width * this.height;
    }

    printArea() {
      console.log(`Area of ${this.name}(${this.width}x${this.height})`,
                  `= ${this.getArea()} m2`);
    }
  }


  // Inherite from Shape
  class Rectangle extends Shape {
    drawShape() {                  // override
      console.log(`shape ■! of '${this.color}' color!`);
    }

  }

  class Triangle extends Shape {
    drawShape() {
      super.drawShape();         // Inherite & more
      console.log(`shape ▲! of '${this.color}' color!`);
    }

    getArea() {                  // override
      return (this.width * this.height)/2;
    }

    toString() {
      return `Triangle:'${this.color}', size=[${this.width}x${this.height}]`
    }
  }

  const rectangle = new Rectangle(20, 20, 'blue', 'Rectangle');
  rectangle.drawShape();
  rectangle.printArea();

  // let area = rectangle.getArea();
  // let size = [rectangle.width, rectangle.height];
  // console.log(`Area of ${Rectangle.name}(${size[0]}x${size[1]})=${area} m2`);

  const triangle = new Triangle(20, 30, 'red', 'Triangle');
  triangle.drawShape();
  triangle.printArea();

  // 6. class checking : instanceOf

  console.log(rectangle instanceof Rectangle);     // true
  console.log(triangle instanceof Rectangle);      // false

  console.log(triangle instanceof Triangle);  // true
  console.log(triangle instanceof Shape);     // true
  console.log(triangle instanceof Object);    // true

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
  console.log(triangle.toString());           // [object Object]
}


// Fun quiz time at the end of lecture05.arrow func : Answer to the Quiz
// function calculator(command, a, b) {}
// command: add, subtract, divide, remainder

function calculator(command, a, b) {
  switch (command) {
    case 'add':
      return a + b;

    case 'subtract':
      return a - b;

    case 'multiply':
      return a * b;

    case 'devide':
      return a / b;

    case 'remainder':
      return a % b;

    default:
      throw Error(`[${command}] <== Unknown command! ...`);
  }
}

console.log(calculator('multiply', 3, 4));
console.log(calculator('much more', 3, 4));



// ex06_5();
// ex06_4();
// ex06_3();
// ex06_2();
// ex06_1();
