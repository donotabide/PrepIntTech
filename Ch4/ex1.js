function range(start, end, step){
    var array = [];
    if(step ==  undefined){
        for(var i = start; i <= end; i++){
            array.push(i);
        }
    } else {
        if(start < end){
            for(var i = start; i <= end; i=i+step)
                array.push(i);
        }else{
            for(var i = start; i >= end; i=i+ step)
                array.push(i);
        }
    }
    return array;
}


//console.log(range(1, 20));

function sumArray(array){
    var sum = 0;
    for(var i = 0; i < array.length; i++)
        sum+=array[i];
    return sum;
}

console.log(sumArray(range(1,10)));
console.log(sumArray(range(5, 2, -1)));
