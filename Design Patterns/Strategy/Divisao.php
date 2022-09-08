<?php 

require_once 'CalculadoraStrategyInterface.php';


class Divisao implements CalculadoraStrategyInterface {
    function execute($n1, $n2){
        if($n2 == 0){
            echo "\nNão é possível dividir por 0.\n\n";
        }else{
            echo $n1 / $n2;
        }
    }
}