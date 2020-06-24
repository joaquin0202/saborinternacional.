/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(inicio);

function inicio()
{
 setTimeout("mostrarVentana()", 2000);
 $("#cerrar").click(cerrarVentana);
 recetaRandom();
 	$('#slides').slidesjs({
        width: 940,
        height: 528,
        play: {
          active: true,
          auto: true,
          interval: 4000,
          swap: true
        }
      });
}


function mostrarVentana(){
    $("#modal").animate({"top":"0vh"},500);
}
function cerrarVentana(){
    $("#modal").animate({"top":"-100vh"},500);
}

function recetaRandom(){
    
  
    for (var i=0; i<=paises.length-3; i++)
    {
     var aleatorio=Math.round(Math.random()*(paises.length-1));   
     
   
     
    $("#paisesRandom").append("<div class='col-lg-4 col-md-6'><a class='a"+paises[aleatorio]['pais']+"'href='catalogo.html?posicion="+aleatorio+"'><img src='img/cubiertos-01.png'/><br>"+paises[aleatorio]['pais']+"</a></div>");
    
}
}