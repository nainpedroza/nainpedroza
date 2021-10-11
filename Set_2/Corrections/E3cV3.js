function isPalindrome(s){
    s = s.toLowerCase();
    let array = Math.floor(s.length/2);
    let exp='';
    for (let i = 0; i < array; i++){
        exp += '(.)';
    }
    if ( !(array === s.length/2)) exp += '(.)';
    for(let i = array; i>0; i--){
        exp += `\\${i}`;
    }
    let regex = new RegExp(exp,"gm");
    let palindrome = s.match(regex);
    return Boolean(palindrome);
}

function checkAnyPalindrome(t){
    let words = t.split(' ');
    let palindromes = [];
    for(word of words){
        if (isPalindrome(word)) palindromes.push(word);
    }
    return palindromes;
}

var string = "aba arba hola abce alpla Hannah Life Anna Section Sale salas";
checkAnyPalindrome(string);//[ 'aba', 'alpla', 'Hannah', 'Anna', 'salas' ]
