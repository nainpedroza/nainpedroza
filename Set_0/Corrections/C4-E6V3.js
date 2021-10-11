function distance(p1,p2,p3,p4,p5,p6){
    let numOfXYZ = arguments.length;
    if(typeof(p1) === 'object' && typeof(p2) === 'object'){
        if (p1.length === p2.length){
            let distance = 0;
            for(let i in p1){
                distance += (p1[i]-p2[i])*(p1[i]-p2[i]);
            }
            distance = Math.sqrt(distance);
            return distance;
        }
        else{
            throw 'Incompatible data points';
        }
    }
    if (numOfXYZ < 4) throw 'Insufficient points';
    if (numOfXYZ !== 4 && numOfXYZ !== 6) throw 'Incompatible coordinates number';
    if (numOfXYZ === 4){
        return Math.sqrt((p1-p3)*(p1-p3) + (p2-p4)*(p2-p4));
    }
    if (numOfXYZ === 6){
        return Math.sqrt((p1-p4)*(p1-p4) + (p2-p5)*(p2-p5) +(p3-p6)*(p3-p6));
    }
}
distance(1,1,1,2) //1
distance(1,2,3,4,5,6) //5.196152422706632
distance([1,2,3],[4,5,6]) //5.196152422706632
