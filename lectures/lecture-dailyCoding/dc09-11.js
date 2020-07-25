"use strict";
// *************************
// dc09.js - style tag
// dc10.js - querySelectorselector
// dc11.js - tag select
// *************************

let target = document.querySelector('body');
let inner = document.querySelector('#sub-title');

let button = document.getElementById("toggle");
let btn_query = document.querySelector('#toggle');

function getNight() {
  target.style.backgroundColor = 'black';
  target.style.color = '#1190b9' ;
  inner.style.color = '#dd3aa1';
}

function getDay() {
  target.style.backgroundColor = 'white';
  target.style.color = 'black';
  inner.style.color = 'black';
}

function getToggle() {
  // THIS CAUSE AN ERROR : BEAUSE OF THIS.VALUE
  // StackOverFlow : https://bit.ly/3hAfpDr


  if (target.dataset.mode === 'day') {
    target.dataset.mode = 'night';
    getDay();
    // this.value = 'night';     // ERROR ON THIS.VALUE
    button.value = 'CHANGE TO => NIGHT';
    console.log(btn_query.value);
  } else {
    target.dataset.mode = 'day';
    getNight()
    // this.value = 'day';     // ERROR ON THIS.VALUE
    button.value = 'CHANGE TO => DAY';
    console.log(btn_query.value);
  }
}
