function funcArray(){
    let counter = 0;
    function allFunctions(funcA,funcB,funcC){
        counter++;
        if (counter%2 == 0){
            funcA();
        }
        if (counter%4 == 0){
            funcB();
        }
        if (counter%5 == 0){
            funcC();
        }
        if (counter == 20) counter = 0;
    }
    return allFunctions;
}

let func = funcArray();

function a1(){
    console.log('a');}
function b1(){
    console.log('b');}
function c1(){
    console.log('c');}
setInterval(func, 15000, a1,b1,c1);
