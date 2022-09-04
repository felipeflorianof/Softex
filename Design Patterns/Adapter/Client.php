<?php

require_once 'Pato.php';
require_once 'Galinha.php';
require_once 'GalinhaCarijo.php';
require_once 'PatoSelvagem.php';
require_once 'PatoAdapter.php';

//Galinha
$galinha = new GalinhaCarijo();
$galinha->fazerCocorico();

// Objeto do tipo Pato Sendo usado como um Objeto do tipo Galinha, por meio do Design Pattern Adapter
$pato = new patoAdapter(new PatoSelvagem());
$pato->fazerCocorico();
$pato->voar();
