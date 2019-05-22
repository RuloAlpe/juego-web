var dimensiones = {
  ancho: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
  alto: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
  ladoTiles: 100,
  escala: 1,

  iniciar: function(){
    // Mostrar cuando cambia el tamaño de la ventana
    window.addEventListener("resize", function(evento){
      this.ancho = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      this.alto = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      inicio.recargarTiles();
      
      console.log("Ancho: "+ancho+" | Alto: "+alto);
    });
  },

  obtenerTilesHorizontales: function(){
    var ladoFinal = dimensiones.ladoTiles * dimensiones.escala;

    /**
     * Ceil es para redondear
     * 
     * EJ: 1000 - 100 = 9000
     * 900 / 100 = 9 cuadros de 100 px se van a pintar
     */
    return Math.ceil( (dimensiones.ancho - ladoFinal) / ladoFinal );
  },

  obtenerTilesVerticales: function(){
    var ladoFinal = dimensiones.ladoTiles * dimensiones.escala;

    /**
     * Ceil es para redondear
     * 
     * EJ: 1000 - 100 = 9000
     * 900 / 100 = 9 cuadros de 100 px se van a pintar
     */
    return Math.ceil( (dimensiones.alto - ladoFinal) / ladoFinal );
  },

  obtenerTotalTiles: function(){

    return dimensiones.obtenerTilesHorizontales() * dimensiones.obtenerTilesVerticales();
  }
}