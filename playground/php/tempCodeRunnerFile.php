<?php

function prependSum(array $array) : int
{
    $sum = array_sum($array);
    $newArray = array_unshift($array, $sum);
    return  $newArray ;
}

$array = array(1,2,3);
$sum = prependSum($array);
echo($sum.PHP_EOL);
print_r($array);