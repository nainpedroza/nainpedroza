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
