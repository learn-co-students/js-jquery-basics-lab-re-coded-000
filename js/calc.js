
function doMath(){
	$('#equals').on('click',function(){
     var number1=$('#number1').val();
     var number2=$('#number2').val();
     var operation=$('#operation').val();
     var valid=validate(operation,number1,number2);
    if(valid===true){
    	// debugger;
    	var res=result(operation,parseInt(number1),parseInt(number2));
        $('#result').text(res);
    }
    else{
    	alert(valid);
    }

	});
}
function  validate(operation,number1,number2){
     if(operation !== '+' && operation !== '-' && operation !== '*' && operation !== '/'){
	 	return "Sorry, that is not a valid operator";
	 }
	 if(!parseInt(number1)||!parseInt(number2)){
	 	return  "Sorry, one of those is not a valid number!";
	 	
	 }
	 return true;
} 

$(document).ready(function(){
	doMath();
});
function result(operation,number1,number2){
	switch(operation)
	{
		case '+':
		 return number1+number2;
		 case '-':
		  return number1-number2;
		  case '*':
		 return number1*number2;
		 case '/':
		  return number1/number2;
	}
}