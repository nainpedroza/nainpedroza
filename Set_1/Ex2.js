var counter = 0;
function fn(x) {
    console.log(x);
}

function limitFunc(func,num) {
    counter += 1;
    if (counter<= num){
        func("Hello World!");
    }
}

limitFunc(fn,2); //Hello World!
limitFunc(fn,2); //Hello World!
limitFunc(fn,2);

