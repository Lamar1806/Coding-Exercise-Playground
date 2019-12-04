<?php

/**
 * @param string $needle The text to search for
 * @param resource $haystack The file pointer, which points to a file successfully opened by fopen()
 * @return int The number of lines that contain the $needle
 */
function countLines (string $needle, $haystack) : int
{
    $regex = "/$needle/"; 
    
    $content =  stream_get_contents($haystack);

    preg_match_all($regex, $content, $matches, PREG_PATTERN_ORDER);
    
    return sizeof($matches[0]) ;
}

$stream = fopen('php://memory', 'r+');
fputs($stream, "Hello, there!\nHow are you today?\nYes, you over there.");
rewind($stream);
print_r(countLines('there', $stream));


