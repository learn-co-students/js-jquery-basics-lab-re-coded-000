function doMath() {
	$('#equals').on('click',function () {
		var number1= $('#number1').val()
		var number2=$('#number2').val()
		var operation=$('#operation').val()
		var valid=validate(operation,number1,number2);
		if(valid===true){
			$('#result').text(result(operation,parseInt(number1),parseInt(number2)));
		}
		else{
			alert(valid);
		}

	})
}


function validate(operation,number1,number2) {
	if (operation!=='+'&&operation!=='-'&&operation!=='*'&&operation!=='/') {
		return "Sorry, that is not a valid operator";
	}

	if (!parseInt(number1)||!parseInt(number2)) {
		return "Sorry, one of those is not a valid number!";
	}
	return true;
}


function result(operator, num1, num2) {
  if (operator == '+'){
    $('#result').html(num1 + num2);
    return num1 + num2;
  }
  else if (operator == '-'){
    $('#result').html(num1 - num2);
    return num1 - num2;
  }
  else if (operator == '*'){
    $('#result').html(num1 * num2);
    return num1 * num2;
  }
  else if (operator == '/'){
    $('#result').html(num1 * num2);
    return num1 / num2;
  }
}



$('document').ready(function () {
	doMath();
})


