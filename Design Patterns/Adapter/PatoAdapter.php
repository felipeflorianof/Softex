<?php

require_once 'Pato.php';
require_once 'PatoSelvagem.php';

class PatoAdapter implements Galinha{
    private $patoAdaptado;

    public function __construct(Pato $patoAdaptado){
        $this->patoAdaptado = $patoAdaptado;
    }

    public function fazerCocorico(){
        echo 'Cocorico'."\n";
    }

    public function voar(){
        echo 'Nao pode voar'."\n";
    }
}