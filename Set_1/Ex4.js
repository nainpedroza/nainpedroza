function copyProp(obj1,obj2,array=0){
  if(array.length>0){
    for(let i=0; i<array.length;i++){
      key = array[i];
      obj1[key] = obj2[key];
    }
    return obj2;
  }
  else{return Object.assign(obj1,obj2);}
  
}
const target = {};
const source = { "p1": 1, "p2": 4, "p3": 5, "p4": 10 };
copyProp(target,source,["p1","p2"]); //{ p1: 1, p2: 4, p3: 5, p4: 10 }
console.log(target); //{ p1: 1, p2: 4 }
