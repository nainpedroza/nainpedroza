//Chapter 3
//1.	Create a function that will multiply two numbers. The function must return the result in base 13.
function mul(x1,x2){
  return (x1*x2).toString(13);
}

var answer1 = mul(9,6);
answer1;

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
muloption2(6,9)

//2.	Create a function that will return the addition of N numbers.
function add() {
  let sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

var answer2 = add(1,2) + add(1,2,4,6,7);
answer2;

//3.	Create an object that will hold methods for adding, multiplying, and factorial operations.
var myMath = {
  add() {
      let sum = 0;
      for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
      }
  return sum;
  },
  mul2() {
    let prod = 1;
    for (var i = 0; i < arguments.length; i++) {
        prod *= arguments[i];
    }
  return prod;
  },
  fact(x){
    let fact = 1
    for (var i=x; i>=1; i--){
      fact *= i;
    }
    return fact;
  }
}
var a = myMath.add(1,2,3);
var b = myMath.mul2(1,2,3);
var c = myMath.fact(3);

//4.	Create a custom object that will hold an image’s mock information such as pixel color data, image size, and name. It must be able to return the information.
var data = new Array (1600); // 40 x 40 px dummy image data

class Image{
  constructor(data, width, height, name){
    this.width = width;
    this.height = height;
    this.name = name;
    this.pixelData = 
      function(a,b){
      for (let i=0; i<a*b; i++){
        data[i]= Math.random();
      }
      return data[a+b];
    } 
  }
}
var img = new Image (data, 40, 40, 'myImage');
img.width; // 40
img.height; // 40
img.name; // ‘myImage’
img.pixelData (20, 4); // returns the color of the pixel at that position.

/*5.	Create a function that will print out the properties of an object. 
a.	If one parameter is provided, it should print out all of the properties accessible by that object.
b.	If a second boolean value parameter is provided, it should only print out the values that belong to the object instance itself if true. */
function CustomObject (a, b) {
		this.a = a;
		this.b = b;
	}

function printObjProp (obj,bool=false){
  let props = Object.getOwnPropertyNames(obj);
  if(bool == false){
    let p = Object.getOwnPropertyNames(obj.__proto__);
    if(p[0]=='constructor'){p.splice(0,1)};
    props.push(p);
  }
  console.log(props.join());
}
CustomObject.prototype.c = function () { return this.a + this.b; };
var obj = new CustomObject (1, 2);
printObjProp (obj); // output: a, b, c
printObjProp (obj, false); // output: a, b, c
printObjProp (obj, true); // output: a, b

//Chapter 4
//1.	Create a recursive function that will calculate the fibonacci value of a number.

function fib2(x){
  if (x<2){
    return x;
  }
  else {
    return fib2(x-1) + fib2(x-2);
  }
}
fib2(9); 


//2.	Create a function that will recursively go through all of the elements of an array of numbers and add them.
var arr = [1,3,5,7];
function addRec(array){
  let n = array.length-1
  if (n>=1){
    console.log(array[n]);
    let suma = array[n];
    array.pop();
    return suma + addRec(array);
  }
  else {
    return array[0];
  }
}
var sum = addRec(arr)

/*3.	Create a custom object type that will hold a number value. 
a.	Make sure that no other data type can be assigned to that variable. 
b.	It must hold ONLY numbers. 
*/

class CustomObject {
    constructor(value){
        if (typeof value === 'number'){
            this.value = value
        }
        else{
            console.log("It is not a number");
        }
    }
}

//4.	Write a function that will accept any number of arguments and print out their data type.
function dataType(array){
  let sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    console.log(typeof(arguments[i])) ;
  }
}	
dataType(1,6.2123123,"pi*2",[function(){}, 1], {}, function () {});

/*5.	Write a function that will calculate the distance between two points. The function should be able to handle 2D and 3D points. 
	Example:
var x1 = 1, y1 = 2, z1 = 1;
	var x2 = 2, y2 = 2, z2 = 4;
	var delta1 = distance (x1, y1, x2, y2); // delta = 1
	var delta2 = distance (x1, y1, z1, x2, y2, z2); // delta = 3.1622…

	distance (x1, x2); // should throw an error: Insufficient parameters
*/

function distance(array){
  if(arguments.length<3){
    return "Insufficient parameters"
  }
  else if(arguments.length<5){
    x1 = arguments[0]
    y1 = arguments[1]
    x2 = arguments[2]
    y2 = arguments[3]
    return Math.sqrt((x2-x1)**2+(y2-y1)**2);
  }
  else if(arguments.length<7){
    x1 = arguments[0]
    y1 = arguments[1]
    z1 = arguments[2]
    x2 = arguments[3]
    y2 = arguments[4]
    z2 = arguments[5]
    return Math.sqrt((x2-x1)**2+(y2-y1)**2+(z2-z1)**2);
  }
}
var x1 = 1, y1 = 2, z1 = 1;
var x2 = 2, y2 = 2, z2 = 4;
var delta1 = distance (x1, y1, x2, y2);
delta1;
var delta2 = distance (x1, y1, z1, x2, y2, z2);
delta2;
distance (x1, x2);

//Exercise 6
function distance2(array){
  var p = [];
  if(typeof array == 'object'){
      if (arguments.length==2){
    if (arguments[0].length == arguments[1].length){
        for (var i = 0; i < arguments.length; i++) {
          for (var j = 0; j< arguments.length; j++){
            p.push(arguments[i][j]);
          }
        }
      return Math.sqrt((p[2]-p[0])**2+(p[3]-p[1])**2);
    }
    else{
      return 'Incompatible data points';
    }
  }
  else if(arguments.length == 3){
    if((arguments[0].length == arguments[1].length) && (arguments[2].length == arguments[1].length)){
      for(var i = 0; i < arguments.length; i++){
        for (var j = 0; j < arguments.length; j++){
          p.push(arguments[i][j]);
        }
      }
    }
    return Math.sqrt((p[3]-p[0])**2+(p[4]-p[1])**2+(p[5]-p[2])**2);
  }
    else{
      return 'Incompatible data points';
    }
  }
  else{
    if(arguments.length<3){
      return "Insufficient parameters"
    }
    else if(arguments.length<5){
      x1 = arguments[0]
      y1 = arguments[1]
      x2 = arguments[2]
      y2 = arguments[3]
      return Math.sqrt((x2-x1)**2+(y2-y1)**2);
    }
    else if(arguments.length<7){
      x1 = arguments[0]
      y1 = arguments[1]
      z1 = arguments[2]
      x2 = arguments[3]
      y2 = arguments[4]
      z2 = arguments[5]
      return Math.sqrt((x2-x1)**2+(y2-y1)**2+(z2-z1)**2);
    }
  }
}

//Chapter 5
//Exercise 1
class bank{
    constructor(accountNumber, balance){
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    
    deposit(accountNumber,deposit){
        if(deposit>this.balance){return "You cannot deposit more than what you have";}
        else{
            return new bank(accountNumber, deposit + this.balance);
        }
    }
    retrieve(accountNumber,retrieve){
        if (accountNumber != this.accountNumber){
            return "You can't retrieve from another account";
        }
        if (this.balance>=retrieve){
            return new bank(accountNumber, this.balance-retrieve);
        }
        else{
            return "You can't retrieve more than what you have";
        }
    }
    showBalance(accountNumber){
        if(accountNumber == this.accountNumber) {return this.balance;}
        else{return "You can't see other's balance than yours";}
    }
    
}
nain = new bank(1, 10000);
console.log(nain);
nain = nain.deposit(1,100);
console.log(nain);
nain = nain.retrieve(1,5000);
console.log(nain);
console.log(nain.showBalance(1));

//Exercise 2
building = {'floors':{'lobby':{'workers':['1','2','3'], 'equipment':['Stair1','Hammer1','Laptop1'], 'rooms':['A','B']},
                          'first':{'workers':['4','5','6'], 'equipment':['Stair2','Drill1','Drill2','Laptop2','Fax'], 'rooms':['1A','1B']},
                          'second':{'workers':['7','8'], 'equipment':['Hammer2','Hammer3', 'Machine1','Machine2'], 'rooms':['2A','2B']}
                        }, 
                'workers':{'one':{'floor':'lobby','room':'A', 'equipment':'Hammer1'},
                           'two':{'floor':'lobby','room':'A', 'equipment':'Stair1'},
                           'three':{'floor':'lobby','room':'B', 'equipment':'Laptop1'},
                           'four':{'floor':'first','room':'1A', 'equipment':['Laptop2','Fax']},
                           'five':{'floor':'first','room':'1A', 'equipment':['Stair2','Drill1']},
                           'six':{'floor':'first','room':'1B', 'equipment':'Drill2'},
                           'seven':{'floor':'second','room':'B', 'equipment':['Hammer2','Hammer3']},
                           'eight':{'floor':'second','room':'B', 'equipment':['Machine1','Machine2']}
                          },
           }
building.floors.first;
building.workers.one.equipment;

//Chapter 6
class Shape{
    constructor(perimeter, area, edges){
        this.edges = edges;
        this.perimeter = perimeter;
        this.area = area;
    }
    display(){
        console.log(this.edges);
    }
}
class Triangle extends Shape{
  constructor(side1){
    super(side1*3, side1*Math.sqrt(3)/2,3);
    this.side = side1;
  } 
}
class Quadrilateral extends Shape{
  constructor(side1,side2){
    super(side1*2+side2*2,side1*side2,4);
    this.side1 = side1;
    this.side2 = side2;
  }
}
class Square extends Quadrilateral{
  constructor(side1){
    super(side1,side1);
  }
}
class anotherPolygon extends Shape{
    constructor(side, apothem, edges){
        super(edges*side, edges*side*apothem/2, edges);
        this.apothem = apothem;
        this.side = side;
    }
}
var newfi4 = new Square(3);
newfi4;
var newfi3 = new Triangle(2);
newfi3;
var newfi2 = new anotherPolygon(1,2,4);
newfi2;
var newfi = new Quadrilateral(2,3);
newfi;

//Chapter 7
//Exercise 1
function hexIntoRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return 'rgb('+parseInt(result[1], 16)+","+parseInt(result[2], 16)+","+parseInt(result[3], 16)+')'
}
hexIntoRgb("#3020ff");

//Exercise 2
function dateTransform(date,originalCountry){
    var mexicoHolidays = {
        "01/01": "Año Nuevo",
        "06/01": "Dia de reyes",
        "05/02": "Dia de la constitución",
        "14/02": "San valentin",
        "24/02": "Dia de la bandera",
        "21/03": "Nat. Benito Juarez",
        "01/05": "Dia del trabajador",
        "05/05": "Batalla de Puebla",
        "10/05": "Día de las madres",
        "15/05": "Día del maestro",
        "16/09": "Día de la independencia",
        "12/10": "Dia de la raza",
        "02/11": "Día de muertos",
        "20/11": "Revolución mexicana",
        "24/12": "Noche buena",
        "25/12": "Navidad",
        "28/12": "Dia de los inocentes",
        "31/12": "Fin de año"
    };
    var usaHolidays = {
        "01/01": "New Year Day",
        "01/16": "Martin Luther King Jr. Day",
        "02/20": "Presidents Day (Washingtons Birthday)",
        "04/01": "Aprils fools day",
        "05/28": "Memorial Day",
        "07/04": "Independence Day",
        "09/03": "Labor Day",
        "08/12": "Columbus Day",
        "12/11": "Veterans Day",
        "11/22": "Thanksgiving",
        "12/25": "Christmas day",
        "12/31": "End of the year"    
    };    
    
    if (originalCountry == "US"){
        var value = Object.values(mexicoHolidays);
        var key = Object.keys(mexicoHolidays);
    }
    else{
        var value = Object.values(usaHolidays);
        var key = Object.keys(usaHolidays);       
    }
    var newdate = date.replace(/([0-9]{2})\/([0-9]{2})\/([0-9]{4})/, "$2/$1/$3")
    var temp = newdate.slice(0,5);
    for(let i=0; i< llaves.length; i++){
        if(temp == key[i]){return newdate +" "+ value[i]}
    }
    return newdate;  
}

dateTransform("09/16/2014","US");
dateTransform("01/04/2014 ","MX");

//Chapter 8
//Exercise 1
var r_text = new Array ();
r_text[0] = "All the leaves are brown";
r_text[1] = "And the sky is grey";
r_text[2] = "I've been for a walk";
r_text[3] = "On a winter's day";
r_text[4] = "I'd be safe and warm";
r_text[5] = "If I was in L.A.";
r_text[6] = "California dreaming, On such a winter's day";

 setInterval(function(){   
   var i = Math.floor(7*Math.random())
    console.log(r_text[i]); 

 }, 1000*60);

//Exercise 2
function a1() {
  console.log('a');
}

function b1() {
  console.log('b');
}
function c1() {
  console.log('c');
}
function func(){
  a1();setTimeout(a1,3000);
  b1();setTimeout(b1,6000);
  c1();setTimeout(c1,9000);
}
setInterval(func());

//Chapter 9
var str = '{"prop1": 42, "myFn": "function(a,b){ return a+b+this.prop1;}"}'
function dataParse(string){
  console.log(JSON.parse(string));
}

var obj = dataParse(str);
obj;

//Chapter 10
var myLib = {
	math: {
		real: {
			add: function (a, b){ return a+b},
			sub: function (a, b){ return a-b},
			mul: function (a, b){ return a*b}
		},
		complex: {
                                                Num: function (real,img){
                                                    this.real = real;
                                                    this.img = img;
                                                    let temp = [];
                                                    temp.push(this.real);
                                                    temp.push(this.img);
                                                    return temp;
                                                  },
			add: function (a, b){
                                                    let temp2 = [];
                                                    temp2.real = a[0]+b[0];
                                                    temp2.img = a[1]+b[1];
                                                    return temp2;
                                                 },
			sub: function (a, b){
                                                    let temp2 = [];
                                                    temp2.real = a[0]-b[0];
                                                    temp2.img = a[1]-b[1];
                                                    return Object.values(temp2);
                                                 },
			mul: function (a, b){
                                                    let temp2 = [];
                                                    temp2.real = a[0]*b[0]-a[1]*b[1];
                                                    temp2.img = a[0]*b[1]+a[1]*b[0];
                                                    return temp2;
                                                },
                                   },
        matrix: {
          add: function (a, b){           
            if(a.length != b.length){return "Not possible to sum up two matrices of difference size"}
            var temp2 = [];
            for(var i=0; i<a.length; i++) {
                temp2[i] = new Array(a.length);
            }
            for(let i=0;i<a.length; i++){
                for(let j=0; j<a.length; j++){
                      temp2[i][j] = a[i][j] + b[i][j];              
                }

            }
          return temp2;
          },
          sub: function (a, b){
            if(a.length != b.length){return "Not possible to substract up two matrices of difference size"}
            var temp2 = [];
            for(var i=0; i<a.length; i++) {
                temp2[i] = new Array(a.length);
            }
            for(let i=0;i<a.length; i++){
                for(let j=0; j<a.length; j++){
                      temp2[i][j] = a[i][j] - b[i][j];              
                }

            }
          return temp2;
          },
          mul: function (a, b){
            if(a.length != b.length){return "Not possible to multiply up two matrices of difference size"}
            var temp2 = [];
            for(var i=0; i<a.length; i++) {
                temp2[i] = new Array(a.length);
            }
            for(let i=0;i<a.length; i++){
                for(let j=0; j<a.length; j++){
                   var sum = 0;
                   for(let k=0; k<a.length; k++){
                        sum += a[i][k]*b[k][j];   
                   }
                   temp2[i][j] = sum;
                } 
            }
          return temp2;
          },
          eye: function (size){ var a = Array.apply(null, new Array(size)); return a.map(function(x, i) { return a.map(function(y, k) { return i == k ? 1 : 0; }) }) },
          dot: function (m, a){
              let c = [];
              if (m.length != a.length){ return "Not possible to evaluate dot product"}
              for(var i=0; i<m.length; i++){
                  var sum = 0;
                  for(var j=0; j<m.length; j++){
                      sum += a[i][j]*m[j]
                  }
                  c[i] = sum;
              }
              return c;
          },
          times: function (a, b){
            let c = [];
            if (b.length==1){b[1] = 0;}
            var temp2 = [];
            for(var i=0; i<a.length; i++) {
                temp2[i] = new Array(a.length);
            }
            var signus = "+"
            var m = 1
            for(let i=0;i<a.length; i++){
                for(let j=0; j<a.length; j++){
                    if(a[i][j]*b[1]<0){signus = "-"; m = -1}
                    else{signus = "+"}
                   temp2[i][j] = a[i][j]*b[0] +signus+(m*a[i][j]*b[1])+"i";
                }
                
            }
          return temp2;
          },
        }
     }
};

With(myLib.math){
  var answer =real.sub(
                  real.add (20, 22), 
                  real.mul(2,5));

  var ans = matrix.times(
              matrix.eye (4), 
              complex.sub (
                      new complex.Num (
                             real.add(5,2),
                             -3), 
                      new complex.Num (3,4)
              )
          );
};

//Chapter 12
<!DOCTYPE html>
<html>
<head>
<script>
function printAttr(){
var div = document.getElementsByTagName("div")[0];
if (div.hasAttributes()) {
       var attrs = div.attributes;
       var output = "";
       for(var i = 0; i <= attrs.length - 1; i++) {
         output = attrs[i].value;
         alert(output)
       }
     } else {
       output = "There are no attributes to print";
     }
}
</script>
<div id='a' class='square' style='display:inline-block' val='something important'></div>
<button type="button" id="btn" onClick="printAttr()">Print Attributes</button></head>
</html>

//Chapter 13
//Exercise 1
<!DOCTYPE html>
<html>
<head>
<p></p>
<script>
var lastClicked;
var grid = clickableGrid(5,5,function(el){
   el.className='clicked';
    if (lastClicked) lastClicked.className='';
    lastClicked = el;
});

document.body.appendChild(grid);
     
function clickableGrid( rows, cols, callback ){
    var i=0;
    var grid = document.createElement('table');
    grid.className = 'grid';
    for (var r=0;r<rows;r++){
        var tr = grid.appendChild(document.createElement('tr'));
        for (var c=0;c<cols;++c){
            var cell = tr.appendChild(document.createElement('td'));
            cell.innerHTML = ++i-1;
            cell.addEventListener('click',(function(el,r,c,i){
                return function(){
                    callback(el,r,c,i);
                }
            })(cell,r,c,i),false);
        }
    }
    return grid;
}
</script>
<style>
.grid { margin:1em auto; border-collapse:collapse }
.grid td {
    cursor:pointer;
    width:30px; height:30px;
    border:1px solid #ccc;
    text-align:center;
    opacity: 0;
    font-family:sans-serif; font-size:13px
}
.grid td.clicked {
    background-color:white;
    font-weight:bold; color:red;
    opacity: 1;
}
</style>
</html>

//Exercise 2
<!DOCTYPE html>
<html>
<head>
<script>
  var clicks = 0;
function onClick() {
  clicks += 1;
  meter.value = clicks;
  if(clicks<=2){
document.getElementById("clicks").innerHTML = clicks;
  }
  else{
    document.getElementById("btn").disabled = true;
  }
}
</script>

<button type="button" id="btn" onClick="onClick()">Click me</button>
<p><meter id="meter" max=3.0 min=0.0 value=0 high=.75 low=.25 optimum=0.5></meter></p></head>
</html>

//Chapter 14
//Exercise 1
<!DOCTYPE html>
<html>
    <link rel="stylesheet" type="text/css" href="style.css">
    <body>
        <input type="number" id="heightValue" value="1">
        <input type="number" id="widthValue" value="1">
        <div id="container">
        </div>
        <input id="builder" type="submit" onclick="makeRows();return false;">
        <button onClick="window.location.reload();">Refresh Page</button>
        <script src="gridBuilder.js"></script>
    </body>
</html>

//style.css
   #container {
    display: grid;
    grid-gap: 1em;
    grid-template-rows: repeat(var(--grid-rows), 1fr);
    grid-template-columns: repeat(var(--grid-cols), 1fr);
  }

  .grid-item {
    padding: 1em;
    border: 1px solid #ddd;
    text-align: center;
  }
//gridBuilder.js
const container = document.getElementById("container");

function makeRows() {
    var rows = document.getElementById("heightValue").value;
    var cols = document.getElementById("widthValue").value;
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        cell.innerText = (c + 1);
        container.appendChild(cell).className = "grid-item";
    };
};
function myFunction() {
    document.getElementById("container").reset();
  }

//Exercise 2
<!DOCTYPE html>
<html>
<body>

<p id="p2">Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!
    Hello World!Hello World!Hello World!Hello World!Hello World!
    Hello World!Hello World!Hello World!Hello World!
    Hello World!Hello World!Hello World!Hello World!Hello World!
    Hello World!Hello World!Hello World!Hello World!Hello World!
</p>
<button type="submit" onclick="change2()">2 columns</button>
<button type="submit" onclick="change3()">3 columns</button>
<button type="submit" onclick="change4()">4 columns</button>
<script>
        function change2(){
        document.getElementById("p2").style.columnWidth = "500px";
    }
        function change3(){
        document.getElementById("p2").style.columnWidth = "350px";
    }
    function change4(){
        document.getElementById("p2").style.columnWidth = "250px";
    }

</script>

</body>
</html>

