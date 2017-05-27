var leftHand = '';
var operator = '';
var rightHand = '';
var result = '';

var clearButton = document.getElementById('clear_button');
var equalButton = document.getElementById('equal_button');
var numberButton = document.getElementsByClassName('number_button');
var operatorButton = document.getElementsByClassName('op_button');
var screen = document.getElementById('screen');


function setScreen(result){
  if (result)
    screen.innerText = result;
  else
    screen.innerText = leftHand + operator + rightHand;
}

function clear(){
  leftHand = '';
  operator = '';
  rightHand = '';
  result = '';
}

for(var i = 0; i < operatorButton.length; i++) {
  var button = operatorButton[i];
  button.addEventListener('click', function(){
    //todo check for leftHand
    operator = this.innerText;
    setScreen()
  });
}

for(var i = 0; i < numberButton.length; i++) {
  var button = numberButton[i];
  button.addEventListener('click', function(){
    if(operator)
      rightHand += this.innerText;
    else
      leftHand += this.innerText;
    setScreen()
  });
}


equalButton.addEventListener('click', function(){
  if (leftHand && operator && rightHand) {
    switch(operator){
      case '+':
        result = parseInt(leftHand) + parseInt(rightHand)
        setScreen(result);
        clear()
        break;
      case '-':
        result = parseInt(leftHand) - parseInt(rightHand)
        setScreen(result);
        clear()
        break;
      case 'X':
        result = parseInt(leftHand) * parseInt(rightHand)
        setScreen(result);
        clear()
        break;
      case '/':
        result = parseInt(leftHand) / parseInt(rightHand)
        setScreen(result);
        clear()
        break;
      default:
      alert('Invalid operator')
    }
  }
  else{
    //TO DO: More UF by telling them what is missing.
    alert('Invalid Equation');
  }
});

clearButton.addEventListener('click', function(){
   clear()
   setScreen();
});
