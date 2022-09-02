<?php

require_once 'IngredientesDecorator.php';

class QueijoMussarelaRalado extends IngredientesDecorator {
    private $sanduiche;
    public function __construct(Sanduiche $sanduiche){

        $this->sanduiche = $sanduiche;
    }

    public function getDescricao(){
        return $this->sanduiche->getDescricao(). ", Com Queijo Mussarela Ralado";
    }

    public function valor(){
        return 2.00 + $this->sanduiche->valor();
    }
}