function add() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

var answer2 = add(1,2) + add(1,2,4,6,7);
answer2; //23
