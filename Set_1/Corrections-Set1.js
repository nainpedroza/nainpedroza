//1
function sort(array,option){
    if(option=='d'){
        var newarr = array.sort().reverse();
    }
    if(option == 'a'){
        var newarr = array.sort();
    }
    if(option == 'byLength-a'){
        var newarr = array.sort(function(a,b){return a.length - b.length}) ;
    }
    if(option == 'byLength-d'){
        var newarr = array.sort(function(a,b){return b.length - a.length}) ;
    }
    else{
        function countCons(str) { 
            var count = str.match(/[^aeiou]/gi);
            if (count==null) return 0;
            count = count.length;
            return count;
        } 
        if(option == 'byCons-a'){
            var newarr = array.sort(function(a,b){return a.length-b.length})
            }
        if(option == 'byCons-d'){
           var newarr = array.sort(function(a,b){return b.length-a.length}) 
        }

    }
    return newarr;
}

sort(['lightning','cases','bye','zzzzzzzzza','a','za'],'a'); //[ 'a', 'bye', 'cases', 'lightning', 'za', 'zzzzzzzzza' ]
sort(['lightning','cases','bye','zzzzzzzzza','a','za’],’d’); //[ 'zzzzzzzzza', 'za', 'lightning', 'cases', 'bye', 'a' ]
sort(['lightning','cases','bye','zzzzzzzzza','a','za'],'byLength-d'); //[ 'zzzzzzzzza', 'lightning', 'cases', 'bye', 'za', 'a' ]
sort(['lightning','cases','bye','zzzzzzzzza','a','za'],'byCons-a'); //[ 'a', 'za', 'bye', 'cases', 'lightning', 'zzzzzzzzza' ]
sort(['lightning','cases','bye','zzzzzzzzza','a','za'],'byCons-d'); //[ 'zzzzzzzzza', 'lightning', 'cases', 'bye', 'za', 'a' ]


//2
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
limited()
limited()
limited()


//3
function display(textcolor ="#FF00FF",size = "x-large",bgcolor="blue" )//default colors are set
{
var col = document.getElementById("elementId");
col.style.color=textcolor;
col.style.fontSize = size;
col.style.backgroundColor = bgcolor;
col.display = function(textcolor, size, bgcolor){
    this.style.color = textcolor;
    this.style.fontSize = size;
    this.style.backgroundColor = bgcolor; 
    }
}


//4
function copyProp(obj1,obj2,array){
  if(array.length>0){
    for(let i=0; i<array.length;i++){
      key = array[i];
      obj1[key] = obj2[key];
    }
    return obj2;
  }
  else{return Object.assign(obj1,obj2);}
  
}
var target = {};
var source = { "p1": 1, "p2": 4, "p3": 5, "p4": 10 };
copyProp(target,source,["p1","p2"]); //{ p1: 1, p2: 4, p3: 5, p4: 10 }
console.log(target); //{ p1: 1, p2: 4 }


//5
function countDig(data){
    if (typeof data=='number'){
    var count = Math.log10(data);
        if(data%count == 0 || data%count == 1){
            count = Math.ceil(count) + 1;
        }
        else{
            count = Math.ceil(count);
        }
    }
    if (typeof data=='string'){
        var count = data.match(/[aeiou]/gi);
        if (count == null) return 0;
        count = count.length  
        }
    return count;
}
countDig(1234509);//6
countDig("Alabama");//4
countDig("Difficult");//3
