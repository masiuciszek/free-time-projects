<?php

class Dice {
    public $value = null;
    public $sides = 6;

    public function __construct($sides = 6){
        $this->sides = $sides;
    }

    public function roll(){
        $this->value = rand(1, $this->sides);
    }

    public function __toString(){

        return '<div class="die">' . $this->value . '</div>';
    }


}