function sortArray(array){
    if(array.length === 0){
        return;
    }
    var noSwaps;
    for(let i = array.length; i > 0 ; i--){
        noSwaps = true;
        for(let j = 0; j <= i-1; j++){
            if(array[j] > array[j + 1]){
                swap(array, j, j + 1);
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }    

    return array;
}

function swap(array, index1, index2 ){   
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;    
    
}

console.log(sortArray([10,5,1,9,8,7]))