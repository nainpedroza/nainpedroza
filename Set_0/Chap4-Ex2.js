var arr = [1,3,5,7];
function addRec(array){
  let n = array.length-1
  if (n>=1){
    let suma = array[n];
    array.pop();
    return suma + addRec(array);
  }
  else {
    return array[0];
  }
}
var sum = addRec(arr)
sum; //16
