<?php

    abstract class Estudar{
        public $estudando;
        public $assunto;
        public $descansar;


        function estudando(){
            if($this->estudando){
                $this->estudando = false;
            }else{
                $this->estudando = true;
            }
        }

        function assunto($assunto){
            $this->assunto = $assunto;
            echo "<p>atualmente estudando ", $assunto, "</p>";
        }

        function descansar(){
            $this->estudando = false;
            echo "<p>Indo dormir...</p>";
        }
    }