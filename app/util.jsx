let getNewEquation = (op, min, max) => {
  let equation = getRandomEquation(op, min, max);
  let answer = 0;
  
  switch(op) {
    case '+':
      answer = equation[0] + equation[1];
      break;
    case '-':
      answer = equation[0] - equation[1];
      break;
    case 'x':
      answer = equation[0] * equation[1];
      break;
    case '÷':
      answer = equation[0] / equation[1];
      break;
  }
  
  return {
    equation: equation[0] + " " + op + " " + equation[1],
    answer: answer.toString(),
    choices: getAnswerChoices(op, answer),
  };
};
module.exports.getNewEquation = getNewEquation;

function getRandomEquation(op, min, max) {
  let first = getRandomInt(min, max + 1);
  let second = getRandomInt(min, max + 1);

  if (op === '÷' && first % second !== 0) {
    return getRandomEquation(op, min, max);
  }
  
  if (op === '-' && first < second) {
    return [ second, first ];
  }

  return [ first, second ];
};

function getAnswerChoices(op, answer) {
  let answerPos = getRandomInt(0, 3);
  let choices = [];

  for (let x = 0; x < 4; x++) {
    if (x === answerPos) {
      choices.push(answer.toString());
      continue;
    }

    let choice = getRandomInt(answer - 15, answer + 16);
    if (choice === answer || choice < 0 || choices.indexOf(choice.toString()) !== -1) {
      x--;
      continue;
    }

    choices.push(choice.toString());
  }

  return choices;
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};