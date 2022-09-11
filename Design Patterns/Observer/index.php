<?php

abstract class AbstractObserver {
    abstract function update(AbstractEditor $subject_in);
}

abstract class AbstractEditor {
    abstract function insertLine(AbstractObserver $observer_in);
    abstract function removeLine(AbstractObserver $observer_in);
    abstract function notify();
}

function writeln($line_in) {
    echo $line_in. "\n";
}

class PatternObserver extends AbstractObserver {
    public function __construct() {
    }
    public function update(AbstractEditor $subject) {
      writeln('---------------------------------------------------------------------------------------------'). "\n";
      writeln(' Mensagem Padrão. '.$subject->getFavorites());   
    }
}

class TextEditor extends AbstractEditor {
    private $favoritePatterns = NULL;
    private $observers = array();
    function __construct() {
    }
    function insertLine(AbstractObserver $observer_in) {
      $this->observers[] = $observer_in;
    }
    function removeLine(AbstractObserver $observer_in) {
      foreach($this->observers as $okey => $oval) {
        if ($oval == $observer_in) { 
          unset($this->observers[$okey]);
        }
      }
    }
    function notify() {
      foreach($this->observers as $obs) {
        $obs->update($this);
      }
    }
    function updateFavorites($newFavorites) {
      $this->favorites = $newFavorites;
      $this->notify();
    }
    function getFavorites() {
      return $this->favorites;
    }
}
  $ObserverPattern = new TextEditor();
  $NewExample = new PatternObserver();
  $ObserverPattern->insertLine($NewExample). "\n";

  $ObserverPattern->updateFavorites('just a test, I will get that job!, ill be an intern Developer'). "\n";
  $ObserverPattern->updateFavorites('Another test, I have to be great.'). "\n";
  $ObserverPattern->removeLine($NewExample). "\n"; // delete the line that is under it;
  $ObserverPattern->updateFavorites('remenber to study this again, design patterns are the path.'). "\n";
  
  writeln('---------------------------------------------------------------------------------------------'). "\n";
 
?>