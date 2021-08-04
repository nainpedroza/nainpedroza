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
