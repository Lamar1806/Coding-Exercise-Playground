function validate(username) {
    // Write the code that goes here
    let regex = /[^a-zA-Z0-9-]/

    if(regex.test(username) || username.length > 16 || username.length < 6 ){
        return false
    }else{
        return true
    }
}

console.log(validate('Mike-Standish')); // Valid username
console.log(validate('Mike Standish')); // Invalid username