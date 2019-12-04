// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(int, exp){
    let result = int;
    exp --;
    
    if(exp <= 0){
        return result ;
    }    

    return result *= power(int, exp) 
}

console.log('My anser',power(2,1))
console.log(Math.pow(2,8))