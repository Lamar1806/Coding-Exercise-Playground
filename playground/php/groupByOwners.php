<?php

function groupByOwners(array $files) : array
{
    $newArray = array();
    foreach($files as $key=>$value){
        if(in_array($value, $newArray)){
            array_push($newArray, $key);
        }else{
            $newArray[$key] = $value;
        }
    }
    // ksort($newArray, SORT_NUMERIC);
    return $newArray;
}

$files = array
(
    "Input.txt" => "Randy",
    "Code.py" => "Stan",
    "Output.txt" => "Randy"
);
var_dump(groupByOwners($files));

//not done!