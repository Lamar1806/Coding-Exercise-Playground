 /**
  * Naive Approach
  */
 function anagram(str1,str2){

    if(str1.length !== str2.length){
        return false;
    }

    let obj = {};
    let obj2 = {};

    for(let char of [...str1]){
        if(!(char in obj)){
            obj[char] = 1;
        }else{
            obj[char] += 1;
        }
    }
    for(let char of [...str2]){
        if(!(char in obj2)){
            obj2[char] = 1;
        }else{
            obj2[char] += 1;
        }
    }

    for(var key in obj){
        if(!(key in obj2)){
            return false
        }
        
        if(!(obj[key] === obj2[key])){
            return false;
        }
    }

    console.log(obj)
    console.log(obj2)

    return true;
 }

 console.log(anagram('cinema', 'iceman'));
