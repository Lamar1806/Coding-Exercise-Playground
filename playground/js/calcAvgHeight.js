function calcAvgHeight(data) {
    // Calculate average height from received data. If no data, return null.
    let total = 0;
    let count = 0;
    
    
    let heightArray = Object.values(data).map((obj)=>{
        count ++;
        return obj.height;
    })
    
    total = heightArray.reduce((acc, x)=>{
        return acc + x
    })

    return total / count
  }
  
  var avgHeight = calcAvgHeight({
    Matt: { height: 174, weight: 69 },
    Jason: { height: 190, weight: 103 }
  });
  console.log(avgHeight);