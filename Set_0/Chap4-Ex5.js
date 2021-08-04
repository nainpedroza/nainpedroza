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
delta1; //1
var delta2 = distance (x1, y1, z1, x2, y2, z2);
delta2; //3.1622776601683795
distance (x1, x2); //Insufficient parameters
