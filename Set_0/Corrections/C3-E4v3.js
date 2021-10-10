var data = new Array (1600); // 40 x 40 px dummy image data
// Giving some values to the pixel data of the image for testing
for (let i=0; i<data.length; i++){
  data[i]=i;
}
class Image{
  constructor(data, width, height, name){
    this.width = width;
    this.height = height;
    this.name = name;
    if (width*height == data.length){
            this.data = data;
        }
    else{ 
      throw new Error ("The width and height do not match the array");
    }
  }
  pixelData(x,y){
    if(x*y <= data.length){
      return this.data[this.height*x + y];
    }
  }
}
var img = new Image (data, 40, 40, 'myImage');
img.width; // 40
img.height; // 40
img.name; // ‘myImage’
img.pixelData (20,4); //804
img.pixelData (4,20); //180
