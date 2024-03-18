$(document).ready(function(){
    $('#form_usuario').submit(function(e){
        //preventDefault() evita que el formulario se envíe por defecto, ya que primero validaremos.
        e.preventDefault();
        var nombre_usuario = $("#txt_nombre").val();
        var username = $("#txt_username").val();
        var email = $("#txt_email").val();
        var password = $("#txt_password").val();
        var pasword2 = $("#txt_password2").val();
        var fecha_nac = $("#txt_fecha_nac").val();
    
        if (nombre_usuario == "" || username == "" || email == "" ||
            password == "" || pasword2 == "" || fecha_nac == "" )
        {
            alert("Debe ingresar campos obligatorios");
            return false;
        }

        if (password != pasword2)
        {
            alert("Contraseñas deben ser iguales entre si");
            return false;
        }

        if (password.length < 6 || password.length > 18)
        {
            alert("Contraseña debe tener una longitud entre 6 y 18 caracteres");
            return false;
        }

    });

});