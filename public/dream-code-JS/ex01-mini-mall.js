// 배열조작 https://tutorialpost.apptilus.com/
// https://tutorialpost.apptilus.com/code/posts/js/js-array/

const fixColors = ['pink', 'blue', 'yellow', ];
const fixItems = ['t', 'p', 's'];
const fixGenders = ['man', 'woman'];
const fixSizes = ['extra-small', 'small', 'midium', 'large', 'extra-large'];

// console.log(fixItems.length, fixColors.length)
function getImageArray(fixColors, fixItems) {
  const arrayImageNames = new Array();
  for (let i=0; i < fixColors.length; i++) {
    for (let j=0; j < fixItems.length; j++) {
      let nameImage = fixColors[i] + '_' + fixItems[j] + '.png';
      arrayImageNames.push(nameImage);
    }
  }
  return arrayImageNames;
}

let arrayImageNames = getImageArray(fixColors, fixItems);

// FOR TEST!
console.log('Number of Images =', arrayImageNames.length);
for (let i=0; i<arrayImageNames.length; i++) {
  console.log(arrayImageNames[i]);
}


// 윈도우 로딩 될 때 실행 하는 함수
window.onload = function() {
  let htmlMiniMall = "";
  let location = "../../src/img/mini-mall/";

  for (let i=0; i<arrayImageNames.length; i++) {
    htmlMiniMall += `<img width='45' src='${location}${arrayImageNames[i]}' /><br />`;
  }

  document.getElementById("MALL-TABLE").innerHTML = htmlMiniMall;
}
//
