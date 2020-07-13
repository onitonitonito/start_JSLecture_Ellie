"use strict";

// *************************
// Lecture.08 - lt09-array-10functions-APIs-allAbout.js
// *************************

// 0.WARM-UP PRACTICE in Foremer lecture
function ex09_0() {

}

// TODO:

// 01. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange', 'peach'];
  const result = fruits.join();
  console.log(`.join()=${result} / length(${result.length})`);
}


// 02. make an array out of a toString
{
  const fruits = '🍎, 🍌, 🍊, 🍑';
  const result = fruits.split(',');
  console.log(`.split()=[${result}] / length(${result.length})`);
}

// 03. make this array loog like this : [5, 4, 3, 2, 1];
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(`.reverse() array=[${array}]/ resule=[${result}]`);
}

// 04-1. make new array w/o the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const result = array.splice(2, 5);
  console.log(`.splice()  array=[${array}]/ resule=[${result}]`);

}

// 04-2. make new array w/o the first two elements = splice(start, end-1=index)
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2, 5);
  console.log(`.slice()   array=[${array}]/ resule=[${result}]`);

}
class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const students = [
  new Student('A', 29, true, 45),
  new Student('B', 27, false, 80),
  new Student('C', 24, true, 90),
  new Student('D', 26, true, 95),
  new Student('E', 48, false, 60),
];


// 05. find a student with the score 90
{
  student.find(function() {})
}


// 06. make an array of enrolled students
{

}

// 07. make an array containing only the students' scores
// result should be: [45, 80,  90, 95, 60]
{

}

// 08. check if there is a student with the score lower than 50
{

}


// 09. compute students' average score
{

}

// 10. make a string containing all the scores
// result should be: '45, 90, 90, 95, 60'
{

}


// Bonus! do 10 sorted in ascending order
// result should be: '45, 60, 80, 90, 95'
