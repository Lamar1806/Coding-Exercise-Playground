function addUpTo(n){
    let total = 0;
    for(let i = 1; i <= n; i++){
        total += i;
    }
    return total;
}
let total = addUpTo(10000000000);
console.log(total);

//took 14 seconds

/* so slow becuase the four loop repeats
    n additions and assignments,
    i++ equals 2n
    total : happens one time
    i assignment is 

    BigO
    5n + 2
*/