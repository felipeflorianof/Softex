<?php

require_once 'Sanduiche.php';

class SanduicheDeFrango extends Sanduiche {
    public function __construct(){
        $this->descricao = ' Sanduiche de Frango';
    }

    public function valor(){
        return 4.50;
    }
}