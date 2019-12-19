// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, S) {
    // write your code in JavaScript (Node.js 8.9.4)

    if(N <= 0 || N > 50 ){
        return 'rows must be between 1-50';
    }

    if(S === ''){
        return N * 2;
    }

    let rows = {};
    let columns = ['A', 'B', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K']
    let takenSeatsArr = S.split(" ")
    let possibleFamilyGroups = 0;

    
    for(i = 1 ; i <= N; i++){
        rows[i] = [... columns];
        
        if(takenSeatsArr.length){
            takenSeatsArr.forEach((x, i)=>{
                let row = x[0]
                let column = x[1];
                console.log(x)
    
                if(rows.hasOwnProperty(row)){
                    if(rows[row].includes(column)){                    
                        let indexOfColumn = rows[row].indexOf(column);
                        rows[row][indexOfColumn] = false
                        takenSeatsArr.splice(i, 1)
                        console.log('Taken',takenSeatsArr)
                        console.log('newRow', rows)
                    }
                }
            })
        }
    }

    let count = 0;    

    Object.values(rows).forEach((x, i)=>{
        x.forEach((c, j)=>{    
            if(c === 'K' && count < 6){
                count = 0;
            }  
            if(count == 4){
                possibleFamilyGroups ++;
                count = 0;
            }     
            if(c){
                count++;
            }
        })
    })

    console.log(possibleFamilyGroups);

    return possibleFamilyGroups;
}

let s = ''

console.log(solution(2, s))