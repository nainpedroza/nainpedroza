var myMath = {
  add() {
      let sum = 0;
      for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
      }
  return sum;
  },
  mul2() {
    let prod = 1;
    for (var i = 0; i < arguments.length; i++) {
        prod *= arguments[i];
    }
  return prod;
  },
  fact(x){
    let fact = 1
    for (var i=x; i>=1; i--){
      fact *= i;
    }
    return fact;
  }
}
var a = myMath.add(1,2,3); //6
var b = myMath.mul2(1,2,3); //6
var c = myMath.fact(3); //6
