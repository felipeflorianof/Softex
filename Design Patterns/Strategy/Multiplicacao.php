<?php 

require_once 'CalculadoraStrategyInterface.php';

class Multiplicacao implements CalculadoraStrategyInterface {
    function execute($n1, $n2){
        echo $n1 * $n2;
    }
}
