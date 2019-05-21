document.addEventListener('DOMContentLoaded', function(){
  inicio.iniciarJuego();
}, false);

var inicio = {
  iniciarJuego: function(){
    console.log("Juego iniciado");
    dimensiones.iniciar();

    var r = new Rectangulo(10, 10, 100, 100);

    buclePrincipal.iterar();
  }
};