// Object 는 JavaScript 원시타입이 아니기 때문에 주소값을 참조합니다.
// 두 객체는 서로 다른 주소에 저장되어있을테니 당연 주소값이 다를테고
// 그래서 false가 되죠

// console.log({} == {});                      // false
// console.log(NaN == NaN ? false : true);     // undefined

setTimeout(function() {
  debugger;
}, 5000)
