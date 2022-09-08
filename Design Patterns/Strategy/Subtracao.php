<?php 

require_once 'CalculadoraStrategyInterface.php';

class Subtracao implements CalculadoraStrategyInterface {
    function execute($n1, $n2){
        echo $n1 - $n2;
    }
}