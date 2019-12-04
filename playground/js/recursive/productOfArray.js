// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60.

function productOfArray(arr){   
    let total = 0;

    function helper(helperInput){
        if(helperInput.length === 0){
            return; 
        }

        total += helperInput[0] ;

        helper(helperInput.slice(1));
    }

    helper(arr)
    
    return total ;
}

let sum = productOfArray([3,1,2])

console.log(sum);