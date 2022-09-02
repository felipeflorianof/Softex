<?php

abstract class Sanduiche {
    protected $descricao;

    public function getDescricao(){
        return $this->descricao;
    }

    abstract function valor();
}

