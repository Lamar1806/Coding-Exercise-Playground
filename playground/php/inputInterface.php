<?php

class TextInput
{
    protected $input ;

    function __construct() {
        $this->input = '';
    }
    function add($text){
        $this->input = String.Concat($this->input, $text);
    }
    function getValue(){
        return $this->input;
    }
}

class NumericInput extends TextInput
{
    function __construct() {
        parent::__construct();
    }
    function add($text){
        if(is_numeric($text)){
            $this->input = String.Concat($this->input, $text);

        }
    }
}

$input = new NumericInput();
$input->add('1');
$input->add('a');
$input->add('0');
echo $input->getValue();

//not done