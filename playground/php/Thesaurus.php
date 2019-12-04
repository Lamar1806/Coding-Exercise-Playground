<?php

//https://www.testdome.com/questions/php/thesaurus/7278

class Thesaurus
{
    private $thesaurus;

    function Thesaurus(array $thesaurus)
    {
        $this->thesaurus = $thesaurus;
    }

    public function getSynonyms(string $word) : string
    {
        if(array_key_exists($word, $this->thesaurus)){
            return implode(",", $this->thesaurus[$word]);
        }else{
            return "$word not found!";
        }
    }
}

$thesaurus = new Thesaurus(
    [
        "buy" => array("purchase"),
        "big" => array("great", "large")
    ]
);

echo $thesaurus->getSynonyms("big");
echo "\n";
echo $thesaurus->getSynonyms("agelast");