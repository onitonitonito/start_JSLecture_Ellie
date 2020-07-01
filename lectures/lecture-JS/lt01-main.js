let say = 'Hello JS World!';
console.log(say);

window.onload = function () {
  htmlSay = "<H1>" + say + "</H1>"
  document.getElementById("ID").innerHTML = htmlSay;
}
