<?php

    class Mouse{
        public $ligado;
        public $marca;
        public $click;

        function ligado(){
           if($this->ligado == true){
            $this->ligado = false;
           }else{
            $this->ligado = true;
           }
        }

        function marca($marca){
            $this->marca = $marca;
        }

        function click(){
            if($this->ligado){
                echo "<p>Clicou!</p>";
            }else{
                echo "<p>Mouse desligado, Ligue ele para o Click funcionar.</p>";
            }
        }
    }