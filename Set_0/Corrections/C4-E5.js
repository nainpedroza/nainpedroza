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
