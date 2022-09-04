<?php

require_once 'Galinha.php';

class GalinhaCarijo implements Galinha {
    public function fazerCocorico(){
        echo 'Cocorico'."\n";
    }
    public function voar(){
        echo 'Não voa'."\n";
    }
}