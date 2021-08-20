//3.C
function checkAnyPalindrome(str){
var array = str.split(" ")
  var palinArray = [];
  for (let i=0; i<array.length; i++){
    var variable = (/(.)\w+\1$/igm.test(array[i]));
    if(variable==true){
      palinArray.push(array[i]);
    }
  }
  return palinArray;
}

var string = "aba hola abce alpla Hannah Life Anna Section Sale salas";
checkAnyPalindrome(string);//[ 'aba', 'alpla', 'Hannah', 'Anna', 'salas' ]
