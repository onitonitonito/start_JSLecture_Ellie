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

// cleart students array by using Class
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 27, false, 80),
  new Student('C', 24, true, 90),
  new Student('D', 26, true, 95),
  new Student('E', 48, false, 60),
];


// 05. find a student with the score 90
{
  const result = students.find((student) => {
    return student.score == 90;
  });
  console.log('find(arg) = arg.prop state', result);
}


// 06. make an array of enrolled students
{
  const result = students.filter((student) => student.enrolled);
  console.log('filter(arg) = arg.enrolled ', result);
}

// 07. make an array containing only the students' scores
// result should be: [45, 80,  90, 95, 60]
{
  const result = students.map((student) => student.score);
  console.log('map(arg) = arg.score ', result);
}

// 08. check if there is a student with the score lower than 50
{
  const result = students.some((student) => student.score < 50);
  console.log('some(arg) = arg.score state ', result);    // true

  const result2 = students.every((student) => student.score >= 50);
  console.log('every(arg) = arg.score state ', result2);    // false
}


// 09. compute students' average score
{
  // // 01. step by step
  // const result = students.reduce((prev, curr) => {
  //   console.log('------------------');
  //   console.log('prev: ', prev);
  //   console.log('curr: ', curr);
  //   return (prev + curr.score);
  // }, 0);

  // 02. go straight to the result === total sum
  const result = students.reduce((prev, curr) => prev + curr.score, 0);

  console.log('reduce(pre,cur) return pre+cur.score ', result);    // 370
}


// 10. make a string containing all the scores
// result should be: '45, 90, 90, 95, 60'
{
  const result = students
  .map((student) => student.score)   // mapping score only
  .filter((score) => score >= 50)    // filter score >= 50
  .join();                           // join as string '-,-,-,'
  console.log('  --> ', result);
}


// Bonus! do 10 sorted in ascending order
// result should be: '45, 60, 80, 90, 95'

{
  const result = students.map(student => student.score)
  // .sort((a, b) => a - b)     // ascending
  .sort((a, b) => b - a)     // descending
  .join();
  console.log('  -->>', result);
}
