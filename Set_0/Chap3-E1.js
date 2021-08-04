//Exercise 1 Chapter 3
function mul(x1,x2){
  return (x1*x2).toString(13);
}

var answer1 = mul(9,6);
answer1;//42

//Option 2 of Exercise 1
function muloption2(x1,x2){
  var x = x1*x2;
  var modu = 0;
  var q = x;
  var string = "";
  while(q!=0){
    modu = x%13;
    q = Math.floor(x/13);
    switch(modu){
      case 10: modu = "a";
        break;
      case 11: modu = "b";
        break;
      case 12: modu = "c";
        break;
    }
    x = q;
    string += modu
  }
  return string.split("").reverse().join("")
}
muloption2(6,9) //42
muloption2(30,10); //1a1
