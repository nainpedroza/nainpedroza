function CustomObject (a, b) {
		this.a = a;
		this.b = b;
	}

function printObjProp (obj,bool=false){
  let props = Object.getOwnPropertyNames(obj);
  if(bool == false){
    let p = Object.getOwnPropertyNames(obj.__proto__);
    if(p[0]=='constructor'){p.splice(0,1)};
    props.push(p);
  }
  console.log(props.join());
}
CustomObject.prototype.c = function () { return this.a + this.b; };
var obj = new CustomObject (1, 2);
printObjProp (obj); // output: a, b, c
printObjProp (obj, false); // output: a, b, c
printObjProp (obj, true); // output: a, b
