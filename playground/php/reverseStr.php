<?php

function isPalindrome(string $word) : bool
{
    $revStr = strtolower(strrev($word));
    if(strtolower($word) === $revStr){
        return true;
    }else{
        return false;
    }
}   

echo isPalindrome('Deleveled');