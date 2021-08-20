var globalcounter = 0;
function fn(x) {
    console.log(x);
}

function limitFunc(func,num=1) {
    var counter = 0
    while(counter < num && globalcounter < num){
        func("Hello World!");
        counter += 1;
        globalcounter += 1;
    }
}


var limited = function(){limitFunc(fn,2)};
limited(); //Hello World!
limited();//Hello World!
limited();
