function fib2(x){
  if (x<2){
    return x;
  }
  else {
    return fib2(x-1) + fib2(x-2);
  }
}
fib2(9); //34
