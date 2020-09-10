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


const talkArray = [
  "Hello! I am an alert box!!",
  "Alert Message is Changed!",
  "Now, the Key is Down!",
]

function say(key=null) {
  switch (key) {
    case null:
    case 0:
      alert(talkArray[0]);
      break;

    case 1:
      alert(talkArray[1]);
      break;

    case 2:
      alert(talkArray[2]);
      break;
  }
}


// ________________________LECTURE.05_____________________________
// *********************
// 페이스북 그룹 추첨
// *********************
// 페이스북 정책에 대하여 '읽었습니다.' 댓글 셔플추첨 이벤트
// 생활코딩 이벤트 페이지 : https://bit.ly/2XaT9sb
// div#u_0_s._li ... Element search

// 이벤트 페이지의 콘솔창에 붙여넣기하고 ENTER => 실행!
//

function getUsersFromFBCommet() {
  let 당첨자수 = 2;
  let 댓글선택자 = '._3b-9>div>/UFIComment.UFICommentActorName';
  // 이벤트 페이지에서 댓글코맨트를 추출하는 명령 String.

  function getShuffle(a) {
    for (let i=a.length; i; i--) {
      let j = Math.floor(math.random() * i);
      [a[i-1], a[j]] = [a[j], a[i-1]];
    }
  }

  let list = [];

  document.querySelectorAll(댓글선택자).forEach(function(e) {
    list.push(e.innerText);
  });


  list = list.filter((v,i,a) => a.indexOf(v)===i);
  getShuffle(list)

  console.log(list.slice(0, 당첨자수));
}


// ________________________LECTURE.06_____________________________

const word = "Hello, Daily Coding World!";

console.log('Length = ', word.length , 'Chars.');
console.log('Upper.C= ', word.toUpperCase());
