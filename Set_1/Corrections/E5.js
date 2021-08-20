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
