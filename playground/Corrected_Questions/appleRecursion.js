/*
  When i first encountered this problem I had no clue what recursion was
  I brought a course on Udemy which explained exactly what it was and from there
  I was able to get the Answer!
*/

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

//Should return 2 and does!!!
console.log(countItems(arr, "apple"));