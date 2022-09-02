<?php

require_once 'Sanduiche.php';

class SanduicheDeCarne extends Sanduiche {
    public function __construct(){
        $this->descricao = ' Sanduiche de Carne';
    }

    public function valor(){
        return 6.20;
    }
}