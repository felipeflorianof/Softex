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
    require_once 'Pessoa.php';

    $p1 = new Pessoa();
    $p2 = new Pessoa();
    $p3 = new Pessoa();

    $p1->registro();
    $p2->registro();
    $p3->registro();

    ?>
    </pre>
</body>
</html>