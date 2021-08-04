var str = '{"prop1": 42, "myFn": "function(a,b){ return a+b+this.prop1;}"}'
function dataParse(string){
  console.log(JSON.parse(string));
}

var obj = dataParse(str);
obj;

/*output
{
  prop1: 42,
  myFn: 'function(a,b){ return a+b+this.prop1;}'
}
*/
