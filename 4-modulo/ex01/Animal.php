<?php

    abstract class Animal{
        protected $peso;
        protected $idade;
        protected $especie;

        protected function peso($peso){
            $this->peso = $peso;
        }

        protected function idade($idade){
            $this->idade = $idade;
        }

        protected function especie($especie){
            $this->especie = $especie;
        }
    }