
const display = document.querySelector('.input_display');
const numbers = document.querySelectorAll('.numbers_btn');
const operators = document.querySelectorAll('.operator_btn');
const clearButton = document.querySelector('.clear');
const equalButton = document.querySelector('.equal_btn');


var currentInput = '';
var operator = '';
var prevInput = '';

for (var i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('click', function () {
    currentInput += this.textContent;
    updateDisplay();
  });
}

for (var j = 0; j < operators.length; j++) {
  operators[j].addEventListener('click', function () {
    if (prevInput !== '' && currentInput !== '') {
      calculate();
    }
    operator = this.textContent;
    prevInput = currentInput;
    currentInput = '';
    updateDisplay();
  });
}


clearButton.addEventListener('click', function () {
  clear();
  updateDisplay();
});


equalButton.addEventListener('click', function () {
  calculate();
  updateDisplay();
});


function updateDisplay() {
  display.textContent = currentInput || prevInput || '0';
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

  operator = '';
  prevInput = currentInput;
  currentInput = '';
}

// Функция для очистки
function clear() {
  currentInput = '';
  operator = '';
  prevInput = '';
}
