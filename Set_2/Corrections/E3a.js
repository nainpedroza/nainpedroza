function shiftLetter(str) {
    var result = '';
    var charcode = 0;
    function moveOneLetter(letter){
       charcode = (letter.charCodeAt()) + 1;
       if(charcode == 123){charcode = 97;}
       else if(charcode == 91){charcode = 65;}
       else if(charcode == 58){charcode = 48;}
       letter = String.fromCharCode(charcode);
       return letter;
  }
    str = str.replace(/[A-Za-z0-9]/g,moveOneLetter);
    return str;
}


shiftLetter('aBc'); //bCd
shiftLetter('xyz'); //yza
shiftLetter('aK89'); //bl90
shiftLetter('Xxxxx') //Yyyyy
