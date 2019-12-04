<?php

function make_pipeline(...$funcs)
{   
    $result = 0;
    return function($arg) use ($funcs, $result)
    {       
        $result = $funcs($arg);
        return $result;
    };
}

$fun = make_pipeline( function($x) { return $x * 3; },
                      function($x) { return $x + 1; },
                      function($x) { return $x / 2; } );
echo $fun(3); # should print 5

//not done variable looses scope