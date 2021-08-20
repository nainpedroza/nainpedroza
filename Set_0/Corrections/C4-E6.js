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
