function addUpTo(n){
    return n * (n + 1) / 2;
}

let total = addUpTo(10000000000);
console.log(total);

//took 0.205 secconds
//always has 3 operations
// Big O of: O(1)