$(document).ready(function(){
    doMath();

});

function doMath(){
    $('#equals').on('click',function(){
       var number1=$('#number1').val();
       var number2=$('#number2').val();
       var operation=$('#operation').val();
       var valid=validate(operation,number1,number2);
       if(valid===true){

        var res=result(operation,parseInt(number1),parseInt(number2));
        $('#result').text(res);
    }
    else{
        alert(valid);
    }

});
}
function  validate(operation,num1,num2){
 if(operation !== '+' && operation !== '-' && operation !== '*' && operation !== '/'){
    return "Sorry, that is not a valid operator";
}
if(!parseInt(num1)||!parseInt(num2)){
    return  "Sorry, one of those is not a valid number!";

}
else{
    return true;
}

} 
function result(operation,num1,num2){
    switch(operation)
    {
        case '+':
        return num1+num2;
        break;
        case '-':
        return num1-num2;
        break;
        case '*':
        return num1*num2;
        break;
        case '/':
        return num1/num2;
        break;
    }
}