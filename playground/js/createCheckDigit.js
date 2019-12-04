/**
 * @prop {string} membershipId: The customer's membership ID.
 * @return {number} The check digit.
 */
function createCheckDigit(membershipId) {
    // Write the code that goes here.
    let strNumArray = membershipId.split('');
    let numArray = strNumArray.map((x)=>{
        return parseInt(x)
    })
    let sum = numArray.reduce((total, x)=>{
        return total + x
    })
    if(total > 10){
        
    }

    return sum;
}

//For example id equal 25 but becuase this is not a single digit number
// 2 and 5 would be added and the result, 7
  
  console.log(createCheckDigit("55555"));