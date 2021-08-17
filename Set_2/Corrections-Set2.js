//1.A
console.log(/.abc/.test("hello.abcdef")); //True

//1.B
console.log(/a+b?!!1{4}/.test("aaab!!1111")); //True

//2.A
console.log(/(january|february|march|april|may|june|july|august|september|october|november|december) \d{2},\ \d{4}$/gmi.test("January 11, 2001")); //True

//2.E
var string = "Bee zapp Crow Eagle Zorro mouse Ape you"
var expression = /\b[b-y]+\b/gmi;
var array = string.match(expression);
console.log(array); // [ 'Bee', 'Crow', 'mouse', 'you' ]

//2.F
var stri = "Is <b>4 < -1/12</b> true? The <b>answer</b> will <em>surprise</em> you. <b>#</b> "
function checkTags(string){
  var expression = /<(\w+)>(\s*[\wW]*\s*|\s*[\wW]*\s*|\d*\W*\d*\/?\d*|\W*\w*)<\/(\1)>/gmi;
  var array = string.match(expression);
  console.log(array);
}
checkTags(stri); //[ '<b>4 < -1/12</b>', '<b>answer</b>', '<em>surprise</em>', '<b>#</b>' ]

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
