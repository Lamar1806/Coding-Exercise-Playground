function numberAmazonGoStores(rows, column, grid){
  var total = 0;
  var current = 0;
  
  for (var i = 0 ; i < rows; i++) {
    for (var j = 0; j < column; j++) {
      current = grid[i][j];
      if(current == 0){
        continue;
      }
      if(grid[i][j+1] >= grid.column){
        continue;
      }
      if(grid[i][j+1] == 1){
        //this total isn't going up...
        //should result in 3
        total = total++;
      }
    }
  }

  console.log(total)
  return total;
}


let row = 5;
let col = 4;
// 1100 0010 0000 1011 1111
let grid = 
[[1,1,0,0],
[0,0,1,0],
[0,0,0,0],
[1,0,1,1],
[1,1,1,1]];

numberAmazonGoStores(row, col, grid)

// console.log(numberAmazonGoStores(row, col, grid));

// console.log(numToGrid(grid));