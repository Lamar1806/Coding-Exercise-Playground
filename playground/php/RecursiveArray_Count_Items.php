<?php

function countItems(array $arr, string $item) : int
{
    $totalsArray = array();
   
    foreach($arr as $key => $value){
        if(is_array($value)){
            countItems($value, $item);
        }
        $totalsArray[$key] = 0;
    }
    
    if($total == 0){
        $total = -1;
    }
    return $total;
}

$arr = [
    "apple",
    ["banana", "strawberry", "apple"]
];
// echo countItems($arr, "apple");
print_r($arr);


//https://stackoverflow.com/questions/24259628/php-looping-through-array-recursive
//https://stackoverflow.com/questions/35874640/recursively-loop-through-an-array-and-return-number-of-items
