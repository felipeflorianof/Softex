<?php
    require_once 'SanduicheDeFrango.php';
    require_once 'SanduicheDeCarne.php';
    require_once 'IngredientesDecorator.php';
    require_once 'Peperoni.php';
    require_once 'QueijoMussarelaRalado.php';



    $Samduba = new SanduicheDeFrango();
    $Samduba = new Peperoni($Samduba);
    $Samduba = new QueijoMussarelaRalado($Samduba);
    echo $Samduba->getDescricao(). " - Custa $".$Samduba->valor()."\n";



    // Apesar de Não ter sido pedido na Atividade, Achei legal 'brincar' um pouco mais com as possibilidades.
    $SamdubaDeCarne = new SanduicheDeCarne();
    $SamdubaDeCarne = new QueijoMussarelaRalado($SamdubaDeCarne);
    echo $SamdubaDeCarne->getDescricao(). " - Custa $".$SamdubaDeCarne->valor()."\n";
    
