function a1() {
  console.log('a');
}
function b1() {
  console.log('b');
}
function c1() {
  console.log('c');
}
var funcarray = [a1,b1,c1];
var timings = [30000,60000,75000]
for(let i=0; i<3; i++){
  setInterval(funcarray[i],timings[i]);
}
