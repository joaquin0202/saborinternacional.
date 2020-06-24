/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var ruta= window.location.href;
var posicion= ruta.substring(ruta.indexOf("=")+1);
var contadorComentarios=0;

$(document).ready(inicio);

function inicio()
{
    cargarReceta();
    $("#btn_comentar").click(cargarComentario);
}

function cargarReceta()
{  
    $("#titulo2").append("<h2>"+recetas[posicion]['pais']+"</h2><h1>"+recetas[posicion]['titulo']+"</h1><p>"+recetas[posicion]['bajada']+"</p>"); 
    $("#instrucciones").append("<img src='img/" + recetas[posicion]['imagen'] + "'><h2>Instrucciones</h2>")
    
    for(var i=0; i<=recetas[posicion]["preparacion"].length-1;i++)
    {
      $("#instrucciones").append("  <ul><li>"+recetas[posicion]['preparacion'][i]+"</li></ul>")
    }
    
    $("#ingredientes").append("<h2>Ingredientes</h2>");
    
    for(var i=0; i<=recetas[posicion]["ingredientes"].length-1;i++)
    {
      $("#ingredientes").append("<ul><li>"+recetas[posicion]['ingredientes'][i]+"</li></ul>")
    }
    
    if (recetas[posicion]['pais']==="Uruguay")
    {
        $("#listaComentarios").append("<li>me encanta la comida uruguaya!!!</li><li>una receta muy muy fácil!</li></li><li>que rico quedaaaa</li>");
    }
    else if (recetas[posicion]['pais']==="Italia")
    {
        $("#listaComentarios").append("<li>muy rica esta receta italiana</li><li>demas!!!!!</li></li><li>me salvó de un apuro</li>");
    }
    else if (recetas[posicion]['pais']==="México")
    {
        $("#listaComentarios").append("<li>viva México!!</li><li>lastima muy picante</li></li>");
    }
    else if (recetas[posicion]['pais']==="China")
    {
        $("#listaComentarios").append("<li>la comida china nunca falla</li><li>excelente!!!!</li></li><li>delicioso</li>");
    }
    else if (recetas[posicion]['pais']==="Japón")
    {
        $("#listaComentarios").append("<li>espectacular esta receta</li><li>muy buena</li></li><li>delicioso</li>");
    }
}



function cargarComentario()
{
    
    var comentario=$("#comentar").val();
    
    if (comentario!=="")
    
    {
    $("#listaComentarios").append("<li>"+comentario+"</li>");
    contadorComentarios++;
    $("#comentar").val("");
    }
    
    if (contadorComentarios===8)
    {
        $("#listaComentarios").html(" ");
        contadorComentarios=0;
    }
    
}