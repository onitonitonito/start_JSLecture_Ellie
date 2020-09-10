"use strict";
// *************************
// dc09.js - style tag
// dc10.js - querySelectorselector
// dc11.js - tag select
// *************************

let target = document.querySelector('body');
let inner = document.querySelector('#sub-title');

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

function getRepeat() {
  let button = document.getElementById("toggle");

  if (button.value === 'toggle:night') {
    getNight();
    button.value = 'toggle:day';

    let links = document.querySelectorAll('a');
    let i = 0;

    while (i < links.length) {
      links[i].style.color = 'powderblue';
      i++;
    }

  } else {
    getDay();
    button.value = 'toggle:night';

    let links = document.querySelectorAll('a');
    let i = 0;

    while (i < links.length) {
      links[i].style.color = 'red';
      i++;
    }

  }
}
