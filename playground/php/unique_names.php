<?php

function unique_names(array $array1, array $array2) : array
{
    $resultArray = [];
    for($i = 0; $i < sizeof($array1); $i++){
        if(!in_array($array1[$i], $resultArray)){
            array_push($resultArray, $array1[$i]) ; 
        }
    }

    for($i = 0; $i < sizeof($array2); $i++){
        if(!in_array($array2[$i], $resultArray)){
            array_push($resultArray, $array2[$i]) ; 
        }
    }

    return $resultArray;
}

$names = unique_names(['Ava', 'Emma', 'Olivia'], ['Olivia', 'Sophia', 'Emma']);
echo join(', ', $names); // should print Emma, Olivia, Ava, Sophia

//Done