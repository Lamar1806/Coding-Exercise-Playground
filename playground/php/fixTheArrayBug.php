<?php

function prependSum(array $array) : int
{
    $sum = array_sum($array);
    return $sum;
}

$array = array(1,2,3);
$sum = prependSum($array);
array_unshift($array, $sum); //needed to bring it out of the function
echo($sum.PHP_EOL);
print_r($array);

//DONE