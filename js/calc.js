$(document).ready(function(){
  doMath();
  
});

function doMath() {
  $('#equals').on('click',function(){
   var firstNum = parseInt($('#number1').val());
   var secondNum = parseInt($('#number2').val());
   var operat=$('#operation').val(); 
   validate(firstNum, secondNum, operat);
    // console.log("hi");
  });	 	
}

function validate(firstNum, secondNum, operat) {
  if (typeof(firstNum) !== 'number' || typeof(secondNum) !== 'number' || isNaN(firstNum) || firstNum === '' || isNaN(secondNum) || secondNum === '' ) {
    $('#result').text("Sorry, one of those is not a valid number!");
     return 'Sorry, one of those is not a valid number!';}
  
 else if (operat != '+' && operat != '-' && operat != '*' && operat != '/') {
   $('#result').text("Sorry, that is not a valid operator");
   return "Sorry, that is not a valid operator";}
	
  else {
   result(firstNum, secondNum, operat);
   return true;}
 
}

function result(firstNum, secondNum, operat) {
  //console.log(firstNum, secondNum, operat)
  //var result;
  switch (operat) {
    case "+":
    $('#result').html(firstNum + secondNum);
    return firstNum + secondNum;
    break;
    case "-":
    $('#result').html(firstNum - secondNum);
    return firstNum - secondNum;
    break;
    case "*":
    $('#result').html(firstNum * secondNum);
    return firstNum * secondNum;
    break;
    case "/":
    $('#result').html(firstNum / secondNum);
    return firstNum / secondNum;
    break;
    default:

  }

  //return result;
}