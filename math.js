function sum(a,b){
  return a+b;
}
function substract(a,b){
  return a-b;
}
function mult(a,b){
  return a*b;
}
function devide(a,b){
  return a/b;
}


function calculate() {
  var prevNum = parseFloat(prevInput);
  var currentNum = parseFloat(currentInput);

  switch (operator) {
    case '+':
      currentInput = String(prevNum + currentNum);
      break;
    case '-':
      currentInput = String(prevNum - currentNum);
      break;
    case '*':
      currentInput = String(prevNum * currentNum);
      break;
    case '/':
      if (currentNum === 0) {
        currentInput = 'Ошибка';
      } else {
        currentInput = String(prevNum / currentNum);
      }
      break;
    default:
      break;
  }
}
