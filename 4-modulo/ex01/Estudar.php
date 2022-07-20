<?php

    abstract class Estudar{
        protected $estudando;
        protected $assunto;
        protected $descansar;


        protected function estudando(){
            if($this->estudando){
                $this->estudando = false;
            }else{
                $this->estudando = true;
            }
        }

        protected function assunto($assunto){
            $this->assunto = $assunto;
            echo "<p>atualmente estudando ", $assunto, "</p>";
        }

        protected function descansar(){
            $this->estudando = false;
            echo "<p>Indo dormir...</p>";
        }
    }