"use strict";
// *************************
// dc03.js - day & Night
// dc04.js - Alert box
// *************************

function getNight() {
  document.querySelector('body').style.backgroundColor= 'black';
  document.querySelector('body').style.color = 'orange';
}


function getDay() {
  document.querySelector('body').style.backgroundColor= 'white';
  document.querySelector('body').style.color = 'black';
}


function getToggle() {
  // THIS CAUSE AN ERROR : BEAUSE OF THIS.VALUE
  // StackOverFlow : https://bit.ly/3hAfpDr

  let button = document.getElementById("toggle");

  if (document.querySelector('body').dataset.mode === 'day') {
    document.querySelector('body').dataset.mode = 'night';
    getDay();
    // this.value = 'night';     // ERROR ON THIS.VALUE
    button.value = 'CHANGE TO => NIGHT';
  } else {
    document.querySelector('body').dataset.mode = 'day';
    getNight()
    // this.value = 'day';     // ERROR ON THIS.VALUE
    button.value = 'CHANGE TO => DAY';
  }
}
