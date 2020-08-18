/*
*  Ghost-Leg = Ladder declaining
*  https://stackoverflow.com/questions/2721502/code-golf-ghost-leg
**/

let ghostLegs = [];

ghostLegs[0] = "|-| |=|-|=|\n" +
               "| |-| | |-|\n" +
               "|=| |-| | |\n" +
               "| | |-|=|-|";

ghostLegs[1] = "| | | | | | | |\n" +
               "|-| |=| | | | |\n" +
               "|-| | |-| |=| |\n" +
               "| |-| |-| | |-|";

ghostLegs[2] = "| | |=| |\n" +
               "|-| |-| |\n" +
               "| |-| | |";

ghostLegs[3] = "|=|-|";

function g(n, str) {
  let c, i, j;
  let lines = str.split('\n');
  n = (n * 2) - 2;

  for (i = 0; i < lines.length; i++) {
    for (j = 0; j < 3; j++) {
      c = (j == 1) ? '-' : '=';
      if (lines[i].charAt(n-1) == c) n-=2;          // Move left
      else if (lines[i].charAt(n+1) == c) n+=2;     // Move right
    }
  }
  return 1+n/2;
}

let answer;

for (let m = 0; m < ghostLegs.length; m++) {
  console.log('\nTest: ' + (m + 1) + '\n');

  answer = [];
  for (let n = 1; n <= (ghostLegs[m].split('\n')[0].length / 2) + 1; n++) {
    let n_in = n;
    let n_out = g(n_in, ghostLegs[m]);

    console.log(`${n_in} : ${n_out}`);
    answer.push(n_out);
  }

  let answerOrdered = Array.from(answer)
  answerOrdered.sort()

  console.log('\n' + answerOrdered.join(' ') + '\n')
  console.log(ghostLegs[m]);
  console.log('\n' + answer.join(' '));
}
