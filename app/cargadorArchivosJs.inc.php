<?php

$fecha = new DateTime();

$fuentesJavascript = array(
  "js/ajax.js",
  "js/teclado.js",
  "js/rectangulo.js",
  "js/mando.js",
  "js/buclePrincipal.js",
  "js/dimensiones.js",
  "js/inicio.js"
);

foreach($fuentesJavascript as $fuenteJavascript){  
  echo '<script src="' . $fuenteJavascript . '?' . $fecha->getTimestamp() . '"></script>';
  }
?>