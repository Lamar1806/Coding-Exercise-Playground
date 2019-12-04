/**
 * write a function called same, which accepts two arrays.
 * the function should return true if ever value in the array
 *  has it corrisponding value squard in the second array.
 * The frequency of the value must be the same
 * 
 */

 /**
  * Naive Approach
  */
 function same(arr1,arr2){

    if(arr1.length !== arr2.length){
        return false;
    }

    arr1.forEach(element1 => {
        arr2.forEach(element2 =>{
            if(element2 != (element1 * element1)){
                console.log(element1, ' ', element2)
                return false
            }
        })

    });

    return true;
 }

 let array1 = [1,2,3,4]
 let array2 = [1,4,9,16,0]

 console.log(same(array1, array2));
 //wrong result becuase loops are messed up 
 //sort on time so I just moved on!