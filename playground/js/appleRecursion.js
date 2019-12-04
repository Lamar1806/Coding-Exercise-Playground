function countItems(arr, item) {
    // Write the code that goes here 
    numFound = 0;   

    arr.forEach((element, index, array)=>{
        if(arr.length === 0){
          return;
        }
        if(element != item && !Array.isArray(element)){
          array.splice(index, 1)          
        }
        if(Array.isArray(element)){
          countItems(element, item)
          console.log('array found')
        }
        if(element === item){
          array.splice(index, 1)
          countItems(array, item)
          numFound++
        }
    })
    
    return numFound ;
}

  
var arr = [
  "apple",
  ["banana", "strawberry", "apple"]
];
// console.log('i')
console.log(countItems(arr, "apple"));