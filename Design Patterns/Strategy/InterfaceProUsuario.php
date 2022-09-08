<?php

require_once 'CalculadoraStrategyInterface.php';
require_once 'Soma.php';
require_once 'Subtracao.php';
require_once 'Multiplicacao.php';
require_once 'Divisao.php';

$n1 = (int) readline('Digite o primeiro número: ');
$n2 = (int) readline('Digite o segundo número: ');

echo "Digite o número da operação que deseja realizar:\n1 - Soma \n2- Subtracao \n3- Multiplicacao\n4- Divisão\n";
$type = (int) readline('-');


if($type == 1){
    $teste = new \Soma();
    $teste->execute($n1, $n2);
} else if($type == 2){
    $teste = new \Subtracao();
    $teste->execute($n1, $n2);
} else if($type == 3){
    $teste = new \Multiplicacao();
    $teste->execute($n1, $n2);
}
else if($type == 4){
    $teste = new \Divisao();
    $teste->execute($n1, $n2);
}