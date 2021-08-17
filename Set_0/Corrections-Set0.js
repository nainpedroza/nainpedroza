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



