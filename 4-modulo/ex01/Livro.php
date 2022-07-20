<?php

    class Livro{
        public $abrir;
        public $vender;
        public $marcar;
        


        function abrir(){
            if($this->abrir == false){
                $this->abrir = true;
                echo "<p>Livro aberto.</p>";
            }else{
                $this->abrir = false;
                echo "<p>Livro fechado.</p>";
            }
        }

        function marcar(){
            if($this->abrir){
                echo "<p>Folheando livro....</p>";
            }else{
                echo "<p>Não há como folhear o livro. Ele está fechado.</p>";
            }
            
        }

        function vender(){
            $this->abrir = false;
            $this->marcar = false;
            echo "<p>Você vendeu seu livro.</p>";
        }

    }