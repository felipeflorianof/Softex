<?php

    class Programmer{
        private $nome;
        private $idade;
        private $tecnologias;


        public function __construct(){
            $this->nome = "Not identified";
            $this->idade = "not identified";
            $this->tecnologias = 0;
        }


        public function getnome(){
            $this->nome;
        }
        public function getidade(){
            $this->idade;
        }
        public function gettecnologias(){
            $this->tecnologias;
        }


        public function setnome($nome){
            $this->nome = $nome;
        }
        public function setidade($idade){
            $this->idade = $idade;
        }
        public function settecnologias($tecnologias){
            $this->tecnologias = $tecnologias;
        }
    }