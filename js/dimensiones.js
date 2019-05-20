var dimensiones = {
  ancho: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
  alto: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,

  iniciar: function(){
    // Mostrar cuando cambia el tamaño de la ventana
    window.addEventListener("resize", function(evento){
      this.ancho = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      this.alto = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

      console.log("Ancho: "+ancho+" | Alto: "+alto);
    });
  }
}