<?php

require_once 'IngredientesDecorator.php';

class Peperoni extends IngredientesDecorator {
    private $sanduiche;
    public function __construct(Sanduiche $sanduiche){

        $this->sanduiche = $sanduiche;
    }

    public function getDescricao(){
        return $this->sanduiche->getDescricao(). ", Com Peperoni";
    }

    public function valor(){
        return 0.99 + $this->sanduiche->valor();
    }
}