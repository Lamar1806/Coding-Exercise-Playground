function binarySearch(arr, element){
    if(arr.length === 0){
        return;
    }
    let index = -1;

    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while(index === -1 ){

        let middleIndex = Math.round((leftIndex + rightIndex) / 2);

        console.log('left:' , leftIndex, 'middle:' , middleIndex, 'right:' , rightIndex)
      
 
        if(leftIndex > middleIndex  || rightIndex < middleIndex ){
            return index
        }

        if(arr[middleIndex] === element){
            return index = middleIndex;
        }


        //left half
        if(element < arr[middleIndex]){
            rightIndex = middleIndex - 1
        }
        
        //right half
        if(element > arr[middleIndex] ){
            leftIndex = middleIndex + 1
        }
    }

    return index;
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 8))