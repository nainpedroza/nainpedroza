function limitFunc(fn, num){
    var count = 0;
    var err;
    function limit(...args){
        if(count < num){
            count++;
            return fn(...args);
        }
        else{
          return err;
        }
    }
    return limit;
}

function sum(a,b){return a+b;}
function square(a){return a*a;}
const limitedAdd = limitFunc(sum,2);
limitedAdd(1,4) //5
limitedAdd(1,2) //3
limitedAdd(4,3) //
const limitedSquare = limitFunc(square,3);
limitedAdd(2,2) //
limitedSquare(3) //9
limitedSquare(5) //25
limitedSquare(10) //100
limitedSquare(2) //
