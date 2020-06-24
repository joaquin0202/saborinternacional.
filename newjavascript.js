/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var ruta2= window.location.href;
var posicionCatalogo= ruta2.substring(ruta2.indexOf("=")+1);

$(document).ready(inicio);

function inicio()
{
    
    $("#btn_buscar").keyup(buscar);
    $("#seleccionarPais").change(filtrarPorPais);
    $("#filtrarDificultad").change(filtrarPorDificultad);
    $("#filtrarHorario").change(filtrarPorHrario);
    $("#filtrarTiempo").change(filtrarPorTiempo);
    mostrarRecetas();
    
}


function buscar()
{
    var txt=$(this).val();
    txt=txt.toLowerCase();
    $("#ss").empty();
 
    
    for (var i=0; i<= recetas.length-1;i++)
    {
        if (recetas[i]["titulo"].toLowerCase().indexOf(txt)!==-1)
        {
             $("#ss").append("<div class='col-lg-4 col-md-6'><a href='ampliación.html?posicion="+i+"'><img src='img/" + recetas[i]['imagen'] + "'></a><h3>"+recetas[i]['titulo']+"</h3><h4>"+recetas[i]['subtitulo']+"</h4><p>"+recetas[i]['tiempo']+""+" MINUTOS"+"</p></div>");
        }
    }
    
}



function filtrarPorPais(){
    $("#ss").empty();
    var paisSeleccionado=$("#seleccionarPais").val();


  for(var i=0; i<=recetas.length-1;i++)
    {
        if(recetas[i]["pais"]===paisSeleccionado)
        {
            $("#ss").append("<div class='col-lg-4 col-md-6'><a href='ampliación.html?posicion="+i+"'><img src='img/" + recetas[i]['imagen'] + "'></a><h3>"+recetas[i]['titulo']+"</h3><h4>"+recetas[i]['subtitulo']+"</h4><p>"+recetas[i]['tiempo']+""+" MINUTOS"+"</p></div>");
        }
    }
}
function filtrarPorDificultad(){
    $("#ss").empty();
    var dificultadSeleccionada=$("#filtrarDificultad").val();


  for(var i=0; i<=recetas.length-1;i++)
    {
        if(recetas[i]["dificultad"]===dificultadSeleccionada)
        {
            $("#ss").append("<div class='col-lg-4 col-md-6'><a href='ampliación.html?posicion="+i+"'><img src='img/" + recetas[i]['imagen'] + "'></a><h3>"+recetas[i]['titulo']+"</h3><h4>"+recetas[i]['subtitulo']+"</h4><p>"+recetas[i]['tiempo']+""+" MINUTOS"+"</p></div>");
        }
    }
}
function filtrarPorHrario(){
    $("#ss").empty();
    var horarioSeleccionado=$("#filtrarHorario").val();


  for(var i=0; i<=recetas.length-1;i++)
    {
        if(recetas[i]["momentoDia"]===horarioSeleccionado)
        {
            $("#ss").append("<div class='col-lg-4 col-md-6'><a href='ampliación.html?posicion="+i+"'><img src='img/" + recetas[i]['imagen'] + "'></a><h3>"+recetas[i]['titulo']+"</h3><h4>"+recetas[i]['subtitulo']+"</h4><p>"+recetas[i]['tiempo']+""+" MINUTOS"+"</p></div>");
        }
    }
}
function filtrarPorTiempo(){
    $("#ss").empty();
    var tiempoSeleccionado=$("#filtrarTiempo").val();


if (tiempoSeleccionado==="menos de 10")
{
    for (var i = 0; i<=recetas.length-1;i++)
    {
        if(recetas[i]["tiempo"]<11)
        {
            $("#ss").append("<div class='col-lg-4 col-md-6'><a href='ampliación.html?posicion="+i+"'><img src='img/" + recetas[i]['imagen'] + "'></a><h3>"+recetas[i]['titulo']+"</h3><h4>"+recetas[i]['subtitulo']+"</h4><p>"+recetas[i]['tiempo']+""+" MINUTOS"+"</p></div>");
        }
    }
}
else if (tiempoSeleccionado==="entre 10 y 20")
{
    for (var i = 0; i<=recetas.length-1;i++)
    {
        if(recetas[i]["tiempo"]>9 && recetas[i]["tiempo"]<21 )
        {
            $("#ss").append("<div class='col-lg-4 col-md-6'><a href='ampliación.html?posicion="+i+"'><img src='img/" + recetas[i]['imagen'] + "'></a><h3>"+recetas[i]['titulo']+"</h3><h4>"+recetas[i]['subtitulo']+"</h4><p>"+recetas[i]['tiempo']+""+" MINUTOS"+"</p></div>");
        }
    }
}
else if (tiempoSeleccionado==="más de 30")
{
    for (var i = 0; i<=recetas.length-1;i++)
    {
        if(recetas[i]["tiempo"]>30)
        {
            $("#ss").append("<div class='col-lg-4 col-md-6'><a href='ampliación.html?posicion="+i+"'><img src='img/" + recetas[i]['imagen'] + "'></a><h3>"+recetas[i]['titulo']+"</h3><h4>"+recetas[i]['subtitulo']+"</h4><p>"+recetas[i]['tiempo']+""+" MINUTOS"+"</p></div>");
        }
    }
}


 
}
function mostrarRecetas()
{
     for (var i = 0; i <= recetas.length - 1; i++)
     {
         $("#ss").append("<div class='col-lg-4 col-md-6'><a href='ampliación.html?posicion="+i+"'><img src='img/" + recetas[i]['imagen'] + "'></a><h3>"+recetas[i]['titulo']+"</h3><h4>"+recetas[i]['subtitulo']+"</h4><p>"+recetas[i]['tiempo']+""+" MINUTOS"+"</p></div>");
     }
      for(var i=0; i<=recetas.length-1;i++)
    {
        if(recetas[i]["pais"]===paises[posicionCatalogo]["pais"])
        {
        filtrarPorIndex();
        }
    }
     
}

function filtrarPorIndex()
{
     $("#ss").empty();
  for(var i=0; i<=recetas.length-1;i++)
    {
        if(recetas[i]["pais"]===paises[posicionCatalogo]["pais"])
        {
            $("#ss").append("<div class='col-lg-4 col-md-6'><a href='ampliación.html?posicion="+i+"'><img src='img/" + recetas[i]['imagen'] + "'></a><h3>"+recetas[i]['titulo']+"</h3><h4>"+recetas[i]['subtitulo']+"</h4><p>"+recetas[i]['tiempo']+""+" MINUTOS"+"</p></div>");
        }
        
    }
    
    
}



