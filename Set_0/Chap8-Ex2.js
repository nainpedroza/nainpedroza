function a1() {
  console.log('a');
}

function b1() {
  console.log('b');
}
function c1() {
  console.log('c');
}
function func(){
  a1();setTimeout(a1,3000);
  b1();setTimeout(b1,6000);
  c1();setTimeout(c1,9000);
}
setInterval(func());
