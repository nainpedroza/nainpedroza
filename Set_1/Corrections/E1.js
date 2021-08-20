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
sort(['lightning','cases','bye','zzzzzzzzza','a','za'],'d'); //[ 'zzzzzzzzza', 'za', 'lightning', 'cases', 'bye', 'a' ]
sort(['lightning','cases','bye','zzzzzzzzza','a','za'],'byLength-d'); //[ 'zzzzzzzzza', 'lightning', 'cases', 'bye', 'za', 'a' ]
sort(['lightning','cases','bye','zzzzzzzzza','a','za'],'byCons-a'); //[ 'a', 'za', 'bye', 'cases', 'lightning', 'zzzzzzzzza' ]
sort(['lightning','cases','bye','zzzzzzzzza','a','za'],'byCons-d'); //[ 'zzzzzzzzza', 'lightning', 'cases', 'bye', 'za', 'a' ]
