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

//Ex4
var data = new Array (1600); // 40 x 40 px dummy image data
//Fill in data numbers 0-1599 in each pixel.
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

//Ex3
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

//Ex4
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

//Ex5
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

//Ex6
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
