function linearSearch(arr, element){
    if(arr.length === 0){
        return;
    }
    let index = -1;

    arr.forEach((x, i, arr)=>{
        if(x === element){
            index = i; 
            return;
        }
    })
    return index;
}

console.log(linearSearch([1,2,3], 3))