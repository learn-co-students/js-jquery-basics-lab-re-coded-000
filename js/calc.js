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

function validate(operat, firstNum, secondNum) {
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

function result(operat, firstNum, secondNum) {
  //console.log(firstNum, secondNum, operat)
  
  switch (operat) {
    case "+":
    $('#result').html(firstNum + secondNum);
    return firstNum + secondNum;
    
    case "-":
    $('#result').html(firstNum - secondNum);
    return firstNum - secondNum;
   
    case "*":
    $('#result').html(firstNum * secondNum);
    return firstNum * secondNum;
   
    case "/":
    $('#result').html(firstNum / secondNum);
    return firstNum / secondNum;
   
    default:

  }

}