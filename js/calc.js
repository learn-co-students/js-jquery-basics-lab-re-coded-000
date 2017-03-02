$(document).ready(function(){
	doMath();
})
var number1= $('#number1');
var number2= $('#number2');
var operation= $('#operation')
function doMath(){
	$('#equals').on('click', function(){
		num1 = parseFloat(number1.val());
		num2 = parseFloat(number2.val());
		op = operation.val();
		var valid=validate(op,num1,num2);
	})
}
function validate(op, num1, num2){
	if ( (typeof(num2)!='number'||typeof(num1)!='number') || (num2=='NaN') ){
		return 'Sorry, one of those is not a valid number!'; 	
	}else if(op !== '+' || op !== '-' || op !== '*' || op !== '/'){
		return "Sorry, that is not a valid operator";
	}else
	{
		result(op, num1, num2);
	}
}

function result(op,num1,num2) {
	var result;
	switch (op) {
		case "+":
		result=num1 + num2
		break;
		case "-":
		result=num1 - num2
		break;
		case "*":
		result=num1 * num2
		break;
		case "/":
		result=num1 / num2
		break;
		default:

	}

	return result;
}