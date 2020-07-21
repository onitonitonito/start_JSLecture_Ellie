// *************************
// lt01-main.js
// *************************

let say = 'Hello JS World!';
console.log(say);

// need div id="HELLO" in the HTML DOC
window.onload = function () {
  // htmlSay = "<H1>" + say + "</H1>"
  htmlSay = `<H1>${say}</H1>`
  document.getElementById("HELLO").innerHTML = htmlSay;
}
