var operations=["+","-","*","/"];
function doMath() {
   $('#equals').on('click',function(){
     var op=$('#operation').val();
     var num1 = parseInt($('#number1').val());
      var num2 = parseInt($('#number2').val());
       alert(validate(op,num1,num2)); //? $('#result').text(result(op,num1,num2)) : alert(validate(op,num1,num2));
    //  opp.indexOf(obj) != -1 ? opp=

   })
}
function validate(op,num1,num2) {

  if(operations.indexOf(op) ==-1){return "Sorry, that is not a valid operator";}
  else if ( (typeof(num2)!='number'||typeof(num1)!='number') || (num2=='NaN') ) {return "Sorry, one of those is not a valid number!" ; }
  else{return true;}
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
$(document).ready(function(){
 doMath();

});
