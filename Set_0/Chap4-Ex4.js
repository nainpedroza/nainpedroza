function dataType(array){
  let sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    console.log(typeof(arguments[i])) ;
  }
}	
dataType(1,6.2123123,"pi*2",[function(){}, 1], {}, function () {}); 
/* 
'number'
'number'
'string'
'object'
'object'
'function'
*/
