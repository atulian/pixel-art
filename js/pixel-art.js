

var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];


generarPaleta();
generarGrilla();

// Variable jQuery para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var $colorPersonalizado = $('#color-personalizado');



$colorPersonalizado.change(function() {
  // Se guarda el color de la rueda en colorActual
  var colorActual = $colorPersonalizado.val();
  
  // Completar para que cambie el indicador-de-color al colorActual
  cambiarColorSeleccionado(colorActual);
});

function cambiarColorSeleccionado(color){
  $('#indicador-de-color').css('background-color',color);
};

function generarPaleta(){
  var $paleta = $('#paleta');
  for(var i=0; i<nombreColores.length; i++){
    var $nuevoColor = $('<div>',
                    {"class": 'color-paleta'});
  
    $nuevoColor.css("background-color", nombreColores[i]);

    $paleta.append($nuevoColor);

  }
}

function generarGrilla(){

  var $grilla = $('#grilla-pixeles');

  for(var i=0; i<1749; i++){
    
    var $pixel = $('<div>',
                    {"class": 'color-pixel'});
    $grilla.append($pixel);

  };
  $grilla.hide().show("explode",1500);
}

//efecto sobre grilla

$('#grilla-pixeles div').hover(
  function(){
    $(this).animate({"opacity":"0.6"},100);
  },
  function(){
    $(this).animate({"opacity":"1"},500);
});


//pintar en grilla
var pintar = false;

function dibujar(event){
  if (pintar){
    $colorSeleccionado = $('#indicador-de-color').css('background-color');
    $(event.target).css('background-color', $colorSeleccionado);
  }
}

$('#grilla-pixeles div').mousedown(function(){
  pintar = true;
});
    
$('#grilla-pixeles div').mouseup(function(){
  pintar = false;
});

$('#grilla-pixeles div').mousemove(dibujar);

//obtener color paleta
var $colorPaleta = $('.color-paleta');
$colorPaleta.click(function(){
  var color = $(this).css('background-color');
  cambiarColorSeleccionado(color);  
});

//guardar dibujo
var $guardarDibujo = $('#guardar');
$guardarDibujo.click(function(){
  $contenido = $('#container');
  $contenido.fadeOut(1000).fadeIn(500);
  
  guardarPixelArt();
});

//borrar pantalla
var $limpiarPantalla = $('#borrar');
$limpiarPantalla.click(borrarPantalla);

//cargar superheroes
var $imagen = $("img");
$imagen.click(function(){
 var nombreSuperHeroe = $(this).attr('id');
console.log(nombreSuperHeroe);
 switch (nombreSuperHeroe) {
    case 'batman':
      cargarSuperheroe(batman);
      break;
    case 'flash':
    cargarSuperheroe(flash);
      break;
    case 'wonder':
    cargarSuperheroe(wonder);
      break;
    case 'invisible':
    cargarSuperheroe(invisible);
      break;
 }
});

//aplicar un color al fondo - extra
$aplicarFondo = $('#aplicarFondo');
$aplicarFondo.click(aplicarFondo);