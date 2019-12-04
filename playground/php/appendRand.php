<?php

namespace test;
session_start();

function appendRand() : void
{
    if (isset($_SESSION['data'])) {
        $_SESSION['data'] = $data ;
    } else {
        $_SESSION['data'] = '';
    }

    $_SESSION['data'] += rand(0, 9);
 
}