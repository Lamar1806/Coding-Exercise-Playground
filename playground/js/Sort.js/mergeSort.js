
function mergeArray(arr1,arr2){
    let result = [];
    let i = 0;
    let j = 0;
    // console.log(arr1)
    // console.log(arr2)

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            result.push(arr1[i]);
            i++
        }else{
            result.push(arr2[j]);
            j++;
        }
    }

    while(i < arr1.length){
        result.push(arr1[i]);
        i++
    }

    while(j < arr2.length){
        result.push(arr2[j]);
        j++;
    }
    return result
}

function breakUpArray(arr){
    let result = []
    function helper(arr){
        if(arr.length <= 1) return arr;
        let mid = Math.floor(arr.length/2)
        let left = helper(arr.slice(0, mid));
        console.log('left',left)


        let right = helper(arr.slice(mid, arr.length));
        console.log('right',right)

        return result = mergeArray(left, right)        
    }
    helper(arr)
    return result
}





// console.log(mergeArray([1,3,4],[2,5,6]));

console.log(breakUpArray([10,8,2,5]))