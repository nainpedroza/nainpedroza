function copyProp(obj1,obj2,properties){
  if(!properties){
    for (let p in obj2){
      obj1[p] = obj2[p];
    }
  }
  else{
    for (let p of properties){
      obj1[p] = obj2[p];
    }
  }
}
var target = {};
var source = { "p1": 1, "p2": 4, "p3": 5, "p4": 10 };
copyProp(target,source,["p1","p2","p4"]); //{ p1: 1, p2: 4, p3: 5, p4: 10 }
console.log(target); //{ p1: 1, p2: 4, p4: 10 }
