<?php

function getViewCount(string $jsonString) : int
{
    $json = json_decode($jsonString, true);
    $total = 0;
    foreach($json['videos'] as $key => $value){
        $total += $key['viewCount'];
    }
    print_r($json['videos']);
    print_r($json['total']);
    return 0;
}

$jsonString = '{
    "apiVersion":"2.1",
    "videos":[
        {
            "id":"253",
            "category":"Music",
            "title":"Jingle Bells",
            "duration":457,
            "viewCount":88270796
        }
    ]
}';

echo getViewCount($jsonString);