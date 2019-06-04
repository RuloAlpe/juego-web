function PaletaSprites(datosSprite){
  this.rutaImagen = datosSprite.image;
  this.anchoImagen = parseInt(datosSprite.imagewidth);
  this.altoImagen = parseInt(datosSprite.imageheight);

  this.anchoSprites = parseInt(datosSprite.tilewidth);
  this.altoSprites = parseInt(datosSprite.itileheight);

  this.primerSpriteSobreUno = parseInt(datosSprite.firstgid);

  this.anchoImagenMedidoEnSprites = this.anchoImagen / this.anchoSprites;
  this.altoImagenMedidoEnSprites = this.altoImagen / this.altoSprites;
  this.totalSprites = this.anchoImagenMedidoEnSprites * this.altoImagenMedidoEnSprites;

  this.sprites = [];
  for(s = 0; s < totalSrites; s++){
    var idActualSobreZero = this.primerSpriteSobreUno - 1 + s;
    this.sprites.push(new Sprite(this.rutaImagen, idActualSobreZero, ));
  }
}

PaletaSprites.prototypes.obtenerPosicionDesdeSprite = function(idSpriteSobreZero){
  var y = idSpriteSobreZero / this.anchoImagenMedidoEnSprites;
}