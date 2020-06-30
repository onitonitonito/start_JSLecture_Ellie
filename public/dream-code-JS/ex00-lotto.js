let lottoColors = [
  '#21fe09', '#ff8700', '#0967f4', '#ff0014', '#ffc200', '#f906eb',
  '#35d125', '#db8a2f', '#3e85f0', '#f04452', '#face42', '#f563ec',
  '#439939', '#b9864d', '#71a5f5', '#f47680', '#f5d87c', '#f1a5ed',
  '#426b3e', '#7c6346', '#9dbff2', '#f59ea5', '#faebba', '#f2bdef',
  '#486545', '#604e3a', '#c0d6f6', '#f9c3c7', '#b1a378', '#a781a5',
  '#749571', '#9e876d', '#8ca2c2', '#c89195', '#8b7c4e', '#834d80',
  '#abcda7', '#d2ba9f', '#c0d6f6', '#74383d', '#6c5b27', '#582055',
  '#bbf1b6', '#e8d2b8', '#2c3b52', '#401619', '#52410f', '#4d0749',
];

function getNumbers() {
  let lottoNumbers = [];
  while (lottoNumbers.length < 6) {
    let no = Math.round(Math.random() * 45) + 1;
    if (lottoNumbers.indexOf(no) === -1) lottoNumbers.push(no);
  }
  console.log('lottoNumbers = ', lottoNumbers)
  return lottoNumbers;
}

function checkLogic1(numbers) {
  // 23,24,25 과 간이 연속으로 3개 숫자가 나오지 않게!
  for (let i = 0; i < numbers.length; i++) {
    let no = numbers[i];
    if (numbers.indexOf(no + 1) >= 0 && numbers.indexOf(no + 2) >= 0) {
      console.log('*** Warn.01 = concatinated number!')
      return true;
    }
  }
  return false;
}

function checkLogic2(numbers) {
  // 11,15,17 과 같이 같은 10자리수 3개가 나오지 않게!
  let decArea = [0, 0, 0, 0, 0];
  for (let i = 0; i < numbers.length; i++) {
    let area = Math.floor(numbers[i] / 10);
    decArea[area]++;
  }
  if (decArea[0] > 2 || decArea[1] > 2 || decArea[2] > 2 || decArea[3] > 2 || decArea[4] > 2) {
    console.log('*** Warn.02 = more than 3 numbers are in same plate!')
    return true;
  }
  else return false;
}

// 윈도우 로딩될때 실행하는 함수
window.onload = function() {
  let lottoNumbers = getNumbers();

  while (checkLogic1(lottoNumbers)) lottoNumbers = getNumbers();
  while (checkLogic2(lottoNumbers)) lottoNumbers = getNumbers();

  let htmlLotto = "";

  for (let i = 0; i < lottoNumbers.length; i++) {
    colorPick = Math.round(Math.random() * 47);
    htmlLotto += '<b style="background: ' + lottoColors[colorPick] + '">' + lottoNumbers[i] + '</b> ';
  }
  document.getElementById("NUMBERS").innerHTML = htmlLotto;
}
