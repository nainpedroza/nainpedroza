//2a
console.log(/[a-zA-Z_\$\ ]\d{2},\ \d{4}$/.test("Jan 11, 1111"));

//2b
console.log(/([\d0-9][a-aA-Z]|[a-aA-Z][\d0-9])/.test("27X"));

//2c
console.log(/[a-zA-Z]\.(txt|cpp|java)/.test("test.txt"));

//2d
var cadena = "abcba";
var expresion = /(.)(.).\2\1/gi;
var array = cadena.match(expresion);
console.log(array);

//2e
var elearra = "Bee zapp Crow Eagle Zorro mouse Ape you"
    cadena = elearra.split(' ')
   var newar = [];
for(let i=0; i<cadena.length; i++){
    var expresion = /[b-y]/gi;
    var array_emparejamientos = cadena[i].match(expresion);
    var newstring = cadena[i].match(expresion).join("")
    if(newstring == cadena[i]){
        newar.push(cadena[i]);
    }
}
console.log(newar);

//2f
var stri = "Is <b>4 < -1/12</b> true? The <b>answer</b> will <em>surprise</em> you."
function checkTags(string){
  var expression = /<(\w+)>(\w+\s+\W\s-\w\/\w+|\w+)<\/(\1)>/gmi;
  var array = string.match(expression);
  console.log(array);
}
checkTags(stri); //[ '<b>4 < -1/12</b>', '<b>answer</b>', '<em>surprise</em>' ]
