

$(document).ready(function() {

$('#columnaScreen').on('click','#botonScreen',sacarScreen);
$('#columnaScreen').on('click','#botonDescargarScreen',descargarScreen);
$('#columnaConfig').on('click','#botonFrecuencia',cambiarFrecuencia);
var fre,hor,usu,ima;//frecuencia,usuario,hora e imagen actual 
$(".historial").css("backgroundColor","blue");


  function sacarScreen() {
    var img=document.getElementById("frame");
    if(img.complete){
    //agarrar los elementos canvas e imagen
    var video = document.getElementById('frame');
    var canvas = document.getElementById('canvas-foto');
    // cpara dibujar en 2d en el canvas
    var context = canvas.getContext('2d');
    // variables de ancho ,alto y radio de video
    var w, h, ratio;
    // Calcular el radio
    ratio = video.width / video.height;
    // ancho=ancho - padding
     w = canvas.parentNode.clientWidth -canvas.parentNode.offsetLeft;
     var wi=canvas.parentNode;
     // Calculaaltura basado en le radio
    h = parseInt(w / ratio, 10);
    canvas.width = w;
    canvas.height = h;        
    // define el tamaño del canva s que se muestra  element)
    context.fillRect(0, 0, w, h);
    // dibujar la imagen del video
    context.drawImage(video, 0, 0, w, h);
    $("#canvas-foto").show();
    $("#botonDescargarScreen").prop("disabled",false);
    //agregarAHistorial()
    //tomar usuario hora imagen  y frecuencia
    usu="ejemplo";// conseguir el usuario con api de moodle?
    ima="imagen codificada"
    if (fre ===undefined){fre ="frecuencia no definida"}
    var hora = new Date(); 
    var horaString =hora.getDate() + "/"
                + (hora.getMonth()+1)  + "/" 
                + hora.getFullYear()   
                + hora.getHours() + ":"  
                + hora.getMinutes()+":"
                + hora.getSeconds();;
    hor=horaString;
    agregarAHistorial();
    }else{//mesaje si no cargo el video
      alert('espere que cargue la transmisión');
    }
  }
  function descargarScreen(){
    var canvas=document.getElementById("canvas-foto");
    console.log(canvas.toDataURL());
     //para que funcione la descarga hay que habilitar el cors para elip de donde
     //se va a hostear y agregar atributo cros origin al elemento de imagen en la ip de transmisión
    //referencia https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image
  }

  function cambiarFrecuencia(){
    //alguna rutina para mover la maquina real
   
    var frecuencia =document.getElementById("inputFrecuencia").value;
    if( frecuencia>0 && frecuencia<100){
      console.log("frecuencia:" +frecuencia);
      fre=frecuencia;
      $("#textoFrecuencia").text(frecuencia+" hertz");
    }else{
      alert("Frecuencia fuera de rango");
      console.log("frec no valida");
    }

  }  
  function agregarAHistorial(){
      console.log(fre,hor,usu,ima);
      //
      var divHistorial="<div class=\" historial margin-xs\" >"+
      "frecuencia "+ fre+"</div>";

      console.log(divHistorial);
      $("#historialCapturas").append(divHistorial);
  }  
  
})  //cierra documenbto

    
