function limitFunc(fn, num){
    var count = 0;
    function limit(...args){
        if(count < num){
            count++;
            return fn(...args);
        }
      return ("undefined")
    }
    return limit;
}

function sum(a,b){return a+b;}
function square(a){return a*a;}
const limitedAdd = limitFunc(sum,2);
limitedAdd(1,4) //5
limitedAdd(1,2) //3
limitedAdd(4,3) //undefined
const limitedSquare = limitFunc(square,3);
limitedAdd(2,2) //undefined
limitedSquare(3) //9
limitedSquare(5) //25
limitedSquare(10) //100
limitedSquare(2) //undefined
