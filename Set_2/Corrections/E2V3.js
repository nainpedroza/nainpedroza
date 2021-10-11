//2.A
console.log(/((Jan|Febr)(?:uary)?|March|April|May|June|July|August|Sep(?:tember)?|Oct(?:ober)?|(Nov|Dec)(?:ember)?) \d{2},\ \d{4}$/gmi.test("June 11, 2001")); //True
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
