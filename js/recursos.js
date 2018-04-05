// No modifiques estas funciones a menos que sepas MUY BIEN lo que estas haciendo!


// Abre una ventana para guardar nuestro arte en un archivo pixel-art.png
function guardarPixelArt() {
  html2canvas($("#grilla-pixeles") , {
    onrendered: function(canvas) {
      theCanvas = canvas;
      canvas.toBlob(function(blob) {
        saveAs(blob, "pixel-art.png");
      });
    }
  });
}

// Carga a un superheroe predefinido
function cargarSuperheroe(superheroe) {
  var $grilla = $('#grilla-pixeles');
  var $pixeles = $("#grilla-pixeles div");
  console.log(superheroe);
  for (var i = 0; i < superheroe.length; i++) {
    $pixeles[i].style.backgroundColor = superheroe[i];
  }
  $grilla.hide().fadeIn(1000);
}


function borrarPantalla(){
  var $grilla = $('#grilla-pixeles');
  var $pixeles = $("#grilla-pixeles div");
  for (var i = 0; i < 1749; i++) {
    $pixeles[i].style.backgroundColor = 'white';
  }

  $grilla.hide().fadeIn(1000);
}

function aplicarFondo(){
  $colorSeleccionado = $('#indicador-de-color').css('background-color');
  var $pixeles = $("#grilla-pixeles div");
  for (var i = 0; i < 1749; i++) {
    $pixeles[i].style.backgroundColor = $colorSeleccionado;
  }
}