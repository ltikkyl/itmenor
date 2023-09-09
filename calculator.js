    var display = document.querySelector('.input_display');
    var numbers = document.querySelectorAll('.numbers_btn');
    var operators = document.querySelectorAll('.operator_btn');
    var clearButton = document.querySelector('.clear');
    var equalButton = document.querySelector('.equal_btn');


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

    function clear() {
      currentInput = '';
      operator = '';
      prevInput = '';
    }

    function updateDisplay() {
      display.textContent = currentInput || prevInput || '0';
    }


    clearButton.addEventListener('click', function () {
      clear();
      updateDisplay();
    });

    equalButton.addEventListener('click', function () {
      calculate();
      updateDisplay();
    });


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



