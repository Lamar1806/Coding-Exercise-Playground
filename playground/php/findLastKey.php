<?php

function findLastKey(array $array, $value)
{
    $keyFound = '';
    foreach($array as $key => $val){

        if($val == $value && is_string($key)){
            $keyFound = $key ;
            // echo "\nWe found it";
        }else{
            throw new Exception('Array has no keys');
        }
    }
    // echo "\nKeyFound: ". $keyFound;
    // print_r($array); 
    return $keyFound;
}

echo findLastKey(array('Hello' => 'Green', 'World' => 'Blue'), 'Blue');

//return last key with a specific value from array
//should return World

//Need to redue for sure!!!