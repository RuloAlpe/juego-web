var mando = {
  objeto: null,
  eventosDisponibles: 'ongamepadconnected' in window,
  conectado: false,

  iniciar: function(){
    if(mando.eventosDisponibles){
      window.addEventListener('gamepadconnected', mando.conectar;
      window.addEventListener('gamepadisconnected', mando.desconectado)
    }else{
      mando.actualizar;
    }
  },

  conectar: function(evento){
    mando.objeto = evento.gamepad;
    mando.identificar();
  },

  desconectar: function(evento){
    console.log('Mando desconectado del indice: %d: %s', evento.gamepad.index, evento.gamepad.id)
  },

  actualizar:function(){

  },

  identificar:function(){

  }
}