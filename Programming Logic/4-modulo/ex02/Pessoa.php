<?php

    class Pessoa{
        public static $total = 0;

        static function registro(){
           self::$total += 1;
           echo "<p>Pessoa ",self::$total,"</p>";
        }
    }