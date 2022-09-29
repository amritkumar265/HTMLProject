const array=[undefined ,null , 0 , 1 , 2 ,3];
console.log(truthyCount(array));

function truthyCount(array){
    let count = 0;
    for(let index of array)
    {
        if(index)
            count++;
    }
    return count;
}