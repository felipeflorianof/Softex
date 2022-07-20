<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<pre>
<?php
require_once 'Mouse.php';
require_once 'Livro.php';
require_once 'Animal.php';
require_once 'Estudar.php';

$mouse = new Mouse();
$mouse->marca("Multilaser");
$mouse->ligado();
$mouse->click();
print_r($mouse);


$livro = new Livro();
$livro->abrir();
$livro->abrir();
$livro->folhear();
//$livro->vender();
print_r($livro);

/* 
Classes abstratas não podem ser instâmciadas, porem se não fosse abstratas poderiamos fazer os seguintes testes:

$animal = new Animal();
$animal->peso(190);
$animal->especie("Felino");
$animal->idade(10);
print_r($animal);

$estudante = new Estudar();
$estudante->estudando();
$estudante->assunto("JavaScript");
$estudante->descansar();
print_r($estudante);

*/
?>
</pre>
</body>
</html>



