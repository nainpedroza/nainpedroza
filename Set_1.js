//Exercise 1
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
            else
                count = str.match(/[^aeiou]/gi).length
            return count;
        } 
        var ind = [];
        var newa = [];
        for(let i=0;i<array.length;i++){
            ind[i] = countCons(array[i]);
            newa.push(ind[i]+array[i]);
        }
        if(option == 'byCons-a'){
            var newarr = newa.sort();
        }
        if(option == 'byCons-d'){
            var newarr = newa.sort().reverse();
        }
        for(let i=0;i<newa.length;i++){
            newarr[i] = newarr[i].substring(1);
        }
    }
    return newarr;
}
sort(['lightning','cases','bye','zzzzzzzzza','a','za'],'byCons-d');

//Exercise 2
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

limitFunc(fn,2);
limitFunc(fn,2);
limitFunc(fn,2);

//Exercise 3
function display(textcolor ="#FF00FF",size = "x-large",bgcolor="blue" )//default colors are set
{
var col=document.getElementById("elementId");
col.style.color=textcolor;
col.style.fontSize = size;
col.style.backgroundColor = bgcolor;
}

//Exercise 4
function copyProp(obj1,obj2,array=0){
  if(array.length>0){
    for(let i=0; i<array.length;i++){
      key = array[i];
      obj1[key] = obj2[key];
    }
    return obj2;
  }
  else{return Object.assign(obj1,obj2);}
  
}
const target = {};
const source = { "p1": 1, "p2": 4, "p3": 5, "p4": 10 };
copyProp(target,source,["p1","p2"]);
console.log(target);

//Exercise 5
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
        else{count = data.match(/[aeiou]/gi).length;}  
        }
    return count;
}

//Exercise 6
const dfs = tree => {
    const [name, children] = tree;
    console.log(name);
    console.log(children);
    if (!children){
        return;
    }
    return children.map(dfs);
};
const tree = ['A',[['a',[['aa']]],['b',[['ab'],['bb']]],['c',[['ca'],['cb',[['cba']]]]]]];
dfs(tree);
