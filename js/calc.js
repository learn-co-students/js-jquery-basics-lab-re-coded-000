$(document).ready(function(){
  doMath();
})
function doMath() {
  $('#equals').click(function(){
    number1 = parseFloat($('#number1').val())
    number2 = parseFloat($('#number2').val())
    operator = $('#operation').val()
    validate(number1,number2,operator)
  })
}

function validate(number1,number2,operator) {
  if (operator=="+" || operator=="-" || operator=="/" || operator=="*") {
    if (isNaN(number1) && isNaN(number2)) {
      $("#result").text('Sorry, one of those is not a valid number!');
      return "Sorry, one of those is not a valid number!"
    }
    return result(number1,number2,operator)
  }else {
    $('#result').html("Sorry, that is not a valid operator");
      return "Sorry, that is not a valid operator"
  }
}

function result(number1,number2,operator) {
  switch (operator) {
    case '+':
       $('#result').html(number1+number2)
       return number1+number2
      break;
    case '-':
    $('#result').html(number1-number2)
    return number1-number2
      break;
    case '/':
    $('#result').html(number1/number2)
    return number1/number2
      break;
    case '*':
    $('#result').html(number1*number2)
    return number1*number2
      break;
  }
}
