<?php

    abstract class Animal{
        public $peso;
        public $idade;
        public $especie;

        function peso($peso){
            $this->peso = $peso;
        }

        function idade($idade){
            $this->idade = $idade;
        }

        function especie($especie){
            $this->especie = $especie;
        }
    }