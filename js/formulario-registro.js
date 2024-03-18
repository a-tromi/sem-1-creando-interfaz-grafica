$(document).ready(function(){
    
    $('#form_usuario').submit(function(){
        var nombre_usuario = $("#txt_nombre").val();
        
        if (nombre_usuario == ""){
            alert("Debe ingresar campos obligatorios");
        }
        // validar email y otros campos requeridos...
    });

});