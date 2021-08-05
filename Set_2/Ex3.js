//3a
function shiftLetter(str) {
    var result = '';
    var charcode = 0;

    for (var i = 0; i < str.length; i++) {
      charcode = (str[i].charCodeAt()) + 1;
      if(charcode == 123){charcode = 97;}
      else if(charcode == 91){charcode = 65;}
      else if(charcode == 58){charcode = 48;}
      result += String.fromCharCode(charcode);
    }
    return result;

}
console.log(shiftLetter('aBc')); //bCd
console.log(shiftLetter('xyz')); //yza
console.log(shiftLetter('aK89')); //bl90


//3b
var paragraph = 'should never use yolo for any reason'
var text = 'yolo';
var text2 = paragraph.replace(text, "#"+text);
text2 = paragraph.replace(text, '<a href="https://twitter.com/search?q="' +text+'>'+"#"+text+'</a>');
text2; //'should never use <a href="https://twitter.com/search?q="yolo>#yolo</a> for any reason'

//3c
function checkAnyPalindrome(array){
  var palinArray = [];
  for (let i=0; i<array.length; i++){
    var variable = (/(.)\w+\1$/igm.test(array[i]));
    if(variable==true){
      palinArray.push(array[i]);
    }
  }
  return palinArray;
}
var a = ["aba","hola","abce","alpla","Hannah","Life","Anna", "Section","Sale","salas"]
checkAnyPalindrome(a); //[ 'aba', 'alpla', 'Hannah', 'Anna', 'salas' ]
