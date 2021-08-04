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
