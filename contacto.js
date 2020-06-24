/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var contadorCaracteres=0;

$(document).ready(inicio);

function inicio()
{
   
    $("#mail").focusout(validarMail);
    $("#ingresar").click(validarVacio);
    $("#comentario").keyup(validarComentario);
    
    
}


function validarMail ()
{
    var mail=$("#mail").val();
    
    if (mail.indexOf("@") === -1)
    {
        $("#validadorMail").text("su mail no es valido debe contener @");
    }
    else if (mail.indexOf(".", mail.indexOf("@")) === -1)
    {
        $("#validadorMail").text("su mail no es valido debe contener . despues del @");
    }
    else if (mail.charAt(mail.lastIndexOf(".") + 1) === "")
    {
        $("#validadorMail").text("su mail no es valido debe contener texto despues del .");
    }
      else if((mail.substring((mail.lastIndexOf(".") + 1), (mail.length)).length) >= 4)
    {
        $("#validadorMail").text("su mail no es valido la cantidad de letras despues del punto no puede ser mayor a 5");
    }
    else{
        $("#validadorMail").text("");
    }
}

function validarVacio ()
{
    validarNombre();
    validarDireccion();
    validarDepto();
    validarCiudad();
}



function validarNombre()
{
    var nombre=$("#nombre").val();
    
   if (nombre==="")

    {
        $("#validarNombre").text("este requisito es obligatorio");
    }
    else {
        $("#validarNombre").text("");
    }
    
}

function validarDireccion()
{
     var direccion=$("#direccion").val();
    
   if (direccion==="")

    {
        $("#validadorDireccion").text("este requisito es obligatorio");
    }
    else {
        $("#validadorDireccion").text("");
    }
}
function validarCiudad()
{
     var ciudad=$("#inputCity").val();
    
   if (ciudad==="")

    {
        $("#validadorCiudad").text("este requisito es obligatorio");
    }
    else {
        $("#validadorCiudad").text("");
    }
}

function validarDepto()
{
    var deptoSeleccionado=$("#inputState").val();
    
    if (deptoSeleccionado==="Seleccionar")
    {
        $("#validadorDepto").text("debes seleccionar un departamento");
    }
    else{
                $("#validadorDepto").text("");

    }
}

function validarComentario()
{
    
    contadorCaracteres++;
    if (contadorCaracteres===100)
    {
        $("#validadorCaracter").text("la cantidad de caracetres no puede ser mayor a 100");
    }
            
    
}