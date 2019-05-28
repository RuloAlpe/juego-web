var ajax = {
  
  cargarArchivo: function(ruta){
    var peticion = new XMLHttpRequest();

    // Verificar cuando el estado de la peticion cambia
    peticion.onreadystatechange = function(){
      /**
       * 0 - UNSET - no iniciada
       * 1 - OPENED - conectada al servidor
       * 2 - HEADERS_RECIEVED - peticion recibida
       * 3 - LOADING - procesando peticion
       * 4 - DONE - peticion lista
       */

      if(peticion.readyState == XMLHttpRequest.DONE){
        if(peticion.status == 200){
          console.log(JSON.parse(peticion.responseText));
        }else if(peticion.status == 400){
          console.log("Error")
        }else{
          console.log("Resultado inesperado: "+peticion.status)
        }
      }
    };

    peticion.open("GET", ruta, true);
    peticion.send();
  }
}