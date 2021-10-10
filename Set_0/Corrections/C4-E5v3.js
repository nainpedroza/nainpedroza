function distance(){
  console.log(arguments.length)
  if(arguments.length==4){
    return Math.sqrt((arguments[2]-arguments[0])**2+(arguments[3]-arguments[1])**2);
  }
  else if(arguments.length==6){
    return Math.sqrt((arguments[3]-arguments[0])**2+(arguments[4]-arguments[1])**2+(arguments[5]-arguments[2])**2);
  }
  else{
    throw new Error('Insufficient parameters')
  }
}
var x1 = 1, y1 = 2, z1 = 1;
var x2 = 2, y2 = 2, z2 = 4;
var delta1 = distance (x1, y1, x2, y2);
delta1; //1
var delta2 = distance (x1, y1, z1, x2, y2, z2);
delta2; //3.1622776601683795
distance (x1, x2); //Error thrown: Insufficient parameters
