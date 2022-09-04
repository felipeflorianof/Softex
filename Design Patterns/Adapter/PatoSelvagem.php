<?php

require_once 'Pato.php';

class PatoSelvagem implements Pato {
    public function fazerQuaQua(){
        echo 'QuaQua'."\n";
    }
    public function voar(){
        echo 'Voando'."\n";
    }
}