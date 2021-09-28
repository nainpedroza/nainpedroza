function sumRec(array, idx = 0, sum = 0) {
  //add the value of the array at index position idx
  sum += array[idx];
  //if the index we are calculating corresponds to the last element
  //we stop here the recursive summation
  if(idx == array.length-1){
    return sum;
  }
  //otherwise we sum the remaining elements of the array by shifting
  //the index position to the next one
  else{
    return sumRec(array, idx+1, sum);
  }
}

sumRec([1,2,3,4]); // 10
