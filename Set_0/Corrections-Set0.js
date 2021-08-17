//Chapter3 - Ex2
function add() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

var answer2 = add(1,2) + add(1,2,4,6,7);
answer2; //23

//Chapter3 - Ex4
var data = new Array (1600); // 40 x 40 px dummy image data
for (let i=0; i<data.length; i++){
  data[i]=i;
}
class Image{
  constructor(data, width, height, name){
    this.width = width;
    this.height = height;
    this.name = name;
    this.pixelData = 
      function(a,b){
      	var pData = 0;
     	var pixelPoint = a*b;
      	if (pixelPoint <= data.length){
           for (let i=0; i<a*b; i++){
              pData = data[i]
           }
        return pData;
      }
      else{
        return "The pixel is outside the boundaries of the image"
      }
    } 
  }
}
var img = new Image (data, 40, 40, 'myImage');
img.width; // 40
img.height; // 40
img.name; // ‘myImage’
img.pixelData (20,4); //79


//Chapter 4 - Ex2
function sum(array) {
    if(array.length == 0){
        return 0
    }
    else{
        return array[0] + sum(array.slice(1));
    }
}

sum([1,2,3,4]); // 10

//Chapter 4 - Ex3
class CustomObject {
    constructor(value){
        if (typeof value === 'number'){
            this.value = value
        }
        else{
            console.error("It is not a number");
        }
    }
}
var obj1 = new CustomObject(2);
obj1; //value: 2
var obj2 = new CustomObject("hello"); // It is not a number
obj2; // error in console

//Chapter 4 - Ex4
var isInt = function(n) { return parseInt(n) === n };

function dataType(array){
    for (let i = 0; i < arguments.length; i++) {
        if(typeof(arguments[i]) == 'number' && !isInt(arguments[i])){
          console.log('float');
        }
        else if(typeof(arguments[i])=='object' && arguments[i].length>0){
            console.log('array');
        }
        else{ 
            console.log(typeof(arguments[i]));
        }
  }
}

dataType(1,6.2123123,"pi*2",[function(){}, 1], {}, function () {}); // number, float, string, array, object, function

//Chapter 4 - Ex5
function distance(array){
  if(arguments.length<3){
    return "Insufficient parameters"
  }
  else if(arguments.length<5){
    var v = [0,0,0,0];
    for (let i=0; i<5;i++){
        v[i] = arguments[i];
    }
    return Math.sqrt((v[2]-v[0])**2+(v[3]-v[1])**2);
  }
  else if(arguments.length<7){
    var v = [0,0,0,0,0,0];
    for (let i=0; i<7; i++){
        v[i] = arguments[i];
    }
    return Math.sqrt((v[3]-v[0])**2+(v[4]-v[1])**2+(v[5]-v[2])**2);
  }
}
var x1 = 1, y1 = 2, z1 = 1;
var x2 = 2, y2 = 2, z2 = 4;
var delta1 = distance (x1, y1, x2, y2);
delta1; //1
var delta2 = distance (x1, y1, z1, x2, y2, z2);
delta2; //3.1622776601683795
distance (x1, x2); //Insufficient parameters

//Chapter 4 - Ex6
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
      console.error('Incompatible data points');
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
      console.error('Incompatible data points');
    }
  }
  else{
   if(arguments.length<3){
      console.error('Insufficient parameters');
  }
  else if(arguments.length<5){
    var v = [0,0,0,0];
    for (let i=0; i<5;i++){
        v[i] = arguments[i];
    }
    return Math.sqrt((v[2]-v[0])**2+(v[3]-v[1])**2);
  }
  else if(arguments.length<7){
    var v = [0,0,0,0,0,0];
    for (let i=0; i<7; i++){
        v[i] = arguments[i];
    }
    return Math.sqrt((v[3]-v[0])**2+(v[4]-v[1])**2+(v[5]-v[2])**2);
    }
  }
}

//Chapter 5 bank building

//Chapter 6
//I created a class call anotherRegularPolygon!


//Chapter 8 timers
function a1() {
  console.log('a');
}
function b1() {
  console.log('b');
}
function c1() {
  console.log('c');
}
var funcarray = [a1,b1,c1];
var timings = [3000,6000,9000]
for(let i=0; i<3; i++){
  setInterval(funcarray[i],timings[i]);
}

//Chapter 9
var str = '{prop1: 42, myFn: function(a,b){ return a+b+this.prop1;}}'
function dataParse(str) { return eval(`(${str})`); }
dataParse(str);//{ prop1: 42, myFn: [Function: myFn] }





//Chapter 10 complexnumbers
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
            if(a.length != b.length){console.error("Not possible to sum up two matrices of difference size")}
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
            if(a.length != b.length){console.error("Not possible to substract up two matrices of difference size")}
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
            if(a.length != b.length){console.error("Not possible to multiply up two matrices of difference size")}
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
              if (m.length != a.length){ console.error("Not possible to evaluate dot product")}
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

//Simplified without the with statement
const real = myLib.math.real
const complex = myLib.math.complex
const matrix = myLib.math.matrix
var answer = real.sub(
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
answer;
ans;

//Chapter 12 
//prtAttr




//Chapter 13 Ex1

//Chapter 13 Ex2
<!DOCTYPE html>
<html>
<head>
<script>
  var clicks = 0;
  function onClick() {
  clicks += 1;
  meter.value = clicks;
  if(clicks<=2){
    document.getElementById("clicks").textContent = clicks;
  }
  else{
    document.getElementById("btn").disabled = true;
  }
}
</script>

<button type="button" id="btn" onClick="onClick()">Click me</button>
<p>
    <meter id="meter" max="3.0" min="0.0" value="0" high=".75" low=".25" optimum="0.5"></meter>
</p>
</head>
</html>


//Chapter14 - Ex1

//Chapter14 - Ex2
<!DOCTYPE html>
<html>
<body>

<p id="p2">Lorem ipsum dolor sit amet consectetur, 
    adipiscing elit vestibulum dictumst felis iaculis, 
    malesuada mus consequat mollis. 
    Tincidunt dignissim ultricies leo tempor proin justo neque 
    eleifend torquent sodales, cursus potenti orci pharetra vestibulum 
    ligula suscipit massa fusce nascetur malesuada, accumsan sagittis nisl 
    placerat mauris nisi facilisis aliquet elementum. Lobortis ultricies 
    rutrum laoreet a facilisi potenti suspendisse, interdum cras porttitor 
    lacinia id commodo augue, neque purus molestie curae libero quam.
</p>
<div id="buttons">
    <button class="two" type="submit" onclick=event>2 columns</button>
    <button class="three" type="submit" >3 columns</button>
    <button class="four" type="submit" >4 columns</button>
</div>

<script>
        var p = document.getElementById("p2");
        var x = document.getElementById("buttons")
        x.addEventListener('click', event => { // Step 2
            if (event.target.className === 'two') { // Step 3
                let numCols = 2;
                p.style.columnWidth = 1000/numCols + "px"
            }
            if (event.target.className === 'three') { // Step 3
                let numCols = 3;
                p.style.columnWidth = 1000/numCols + "px"
            }
            if (event.target.className === 'four') { // Step 3
                let numCols = 4;
                p.style.columnWidth = 1000/numCols + "px"
            }
        });
</script>

</body>
</html>
